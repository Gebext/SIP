import BlogContent, {
  // currentArticleType,
} from "@/app/blog/[slug]/components/blog/BlogContent";
import strapiClient from "@/helper/apiClient";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic'; // SSR for all pages
export const dynamicParams = true; // Allow on-demand rendering

// export async function generateStaticParams() {
//   try {
//     // Fetch data from Strapi
//     const response = await strapiClient.get("/articles");
//     const articles: currentArticleType = response.data;

  
//     const paths = articles.data?.map((article) => ({
//       slug: article.slug,
//     }));
//     return paths||[];
//   } catch (error) {
//     console.log("Error fetching articles for static params:", error);
//     return []; // Return empty array if there's an error
//   }
// }

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  try {
    const response = await strapiClient.get(
      `/articles?filters[slug][$eq]=${params.slug}&populate=*`
    );
    
    const article = response.data.data?.[0]
    const slugLength:number = response.data?.data.length||0
    const title:string = article.title
    const author:string = article.author.name
    const date = article.publishedAt

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(new Date(date));
    
    const markDownContent = article.blocks?.[0].body
    if (!slugLength) {
      return notFound()
    }

    return (
      <>
        <BlogContent markDownContent={markDownContent} title={title} date={formattedDate} author={author} />
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error); // Trigger 404 if an error occurs
    return notFound()
  }
}


