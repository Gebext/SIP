import BlogContent, {
  currentArticleType,
} from "@/app/blog/[slug]/components/blog/BlogContent";
import strapiClient from "@/helper/apiClient";

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    console.log("hello");
    const response = await strapiClient.get(
      `/articles?filters[slug][$eq]=${params.slug}`
    );
    console.log(response.data);

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
    console.log(response);

    if (articles) {
      const paths = articles.data?.map((article) => ({
        slug: article.slug,
      }));
      return paths;
    }
  } catch (error) {
    console.log("Error fetching articles for static params:", error);
    return []; // Return empty array if there's an error
  }
}
