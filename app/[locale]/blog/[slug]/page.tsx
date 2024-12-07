import strapiClient from "@/helper/apiClient";
import { notFound } from "next/navigation";
import BlogContent from "./components/blog/BlogContent";

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
    const articlesInfo = response.data.data.map((article: Article) => {
      return {
        title: article.title,
        slug: article.slug,
        description: article.description,
      };
    });
    return articlesInfo;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  try {
    const response = await strapiClient.get(
      `/articles?filters[slug][$eq]=${params.slug}&populate=*`
    );

    const article = response.data.data?.[0];
    
    const slugLength: number = response.data?.data.length || 0;
    const title: string = article.title;
    const author: string = article.author?.name;
    const date = article.publishedAt;
    const category = article.category?.name;

    const articlesInfo = await getArticlesInfo();

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(date));

    const markDownContent = article.blocks?.[0].body;
    if (!slugLength) {
      return notFound();
    }

    return (
      <>
        <BlogContent
          markDownContent={markDownContent}
          title={title}
          date={formattedDate}
          author={author}
          articlesInfo={articlesInfo}
          slugName={params.slug}
          category={category}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return notFound();
  }
}
