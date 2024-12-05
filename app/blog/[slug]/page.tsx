import BlogContent from "@/app/blog/[slug]/components/blog/BlogContent";
import strapiClient from "@/helper/apiClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"; // SSR for all pages
export const dynamicParams = true; // Allow on-demand rendering

export type Article = {
  id?: number;
  documentId?: string;
  title?: string;
  description?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

const getArticlesInfo = async (): Promise<Article[]> => {
  try {
    const response = await strapiClient.get(
      "/articles?sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=4"
    );
    const articlesInfo = response.data.data.map((article: any) => {
      return {
        title: article.attributes.title,
        slug: article.attributes.slug,
        description: article.attributes.description,
      };
    });
    return articlesInfo;
  } catch (error) {
    console.error("Error fetching articles info:", error);
    return [];
  }
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: Record<string, string>;
}) {
  try {
    const response = await strapiClient.get(
      `/articles?filters[slug][$eq]=${params.slug}&populate=*`
    );

    const article = response.data.data?.[0];
    const slugLength = response.data?.data?.length || 0;
    if (!slugLength) {
      return notFound();
    }

    const title = article.attributes.title;
    const author =
      article.attributes.author?.data?.attributes?.name || "Anonymous";
    const date = article.attributes.publishedAt;
    const category =
      article.attributes.category?.data?.attributes?.name || "Uncategorized";
    const coverImage =
      article.attributes.coverImage?.data?.attributes?.url || null;
    const markDownContent =
      article.attributes.blocks?.[0]?.body || "No content available.";
    const articlesInfo = await getArticlesInfo();

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(date));

    return (
      <BlogContent
        markDownContent={markDownContent}
        title={title}
        date={formattedDate}
        author={author}
        articlesInfo={articlesInfo}
        slugName={params.slug}
        category={category}
        coverImage={coverImage}
      />
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return notFound();
  }
}
