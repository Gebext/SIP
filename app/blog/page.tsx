import strapiClient from "@/helper/apiClient";
import { Article } from "./[slug]/page";
import BlogList from "./components/BlogList";

export type ArticleWithCategoryAndPhoto = Article & {
  category?: {
    id?: number;
    documentId?: string;
    name?: string;
    slug?: string;
    description?: string | null;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
  } | null;
  cover?: {
    name?: string;
    formats: {
      medium?: {
        ext?: string;
        url?: string;
        hash?: string;
        mime?: string;
        name?: string;
        path?: string | null;
        size?: number;
        width?: number;
        height?: number;
        sizeInBytes?: number;
      };
    };
  } | null;
};

async function Page({searchParams}:{searchParams:{pagination:string}}) {
  const {pagination} = await searchParams

  const getArticlesPicAndCategory = async () => {
    try {
      const response = await strapiClient.get(
        "/articles?populate=category&populate=cover&sort[0]=publishedAt:desc"
      );
      const articles = response.data.data.map(
        (article: ArticleWithCategoryAndPhoto) => {
          return {
            title: article.title,
            slug: article.slug,
            description: article.description,
            cover: `${
              (process.env.BACK_ADDRESS as string) +
              (article.cover?.formats.medium?.url||"/uploads/No_image_available_svg_c7e2aaf9b6.png")
            }`,
            date: new Intl.DateTimeFormat("en-CA").format(
              new Date(article.publishedAt as string)
            ),
            category: article.category?.name,
          };
        }
      );
      return articles;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const articlesData = await getArticlesPicAndCategory();

  return (
    <>
      <BlogList articles={articlesData} />
    </>
  );
}

export default Page;
