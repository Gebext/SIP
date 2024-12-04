import BlogContent, {
  currentArticleType,
} from "@/app/blog/[slug]/components/blog/BlogContent";
import strapiClient from "@/helper/apiClient";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  try {
    const response = await strapiClient.get(
      `/articles?filters[slug][$eq]=${params.slug}`
    );
    const slugLength:number = response.data?.data.length||0

    if (!slugLength) {
      return notFound()
    }

    return (
      <div className="mx-auto min-h-screen max-w-7xl px-4 py-8">
        <BlogContent slugName={params.slug} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error); // Trigger 404 if an error occurs
  }
}

export async function generateStaticParams() {
  try {
    // Fetch data from Strapi
    const response = await strapiClient.get("/articles");
    const articles: currentArticleType = response.data;

  
    const paths = articles.data?.map((article) => ({
      slug: article.slug,
    }));
    return paths||[];
  } catch (error) {
    console.log("Error fetching articles for static params:", error);
    return []; // Return empty array if there's an error
  }
}
