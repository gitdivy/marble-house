import { client } from "../sanityClient"
import { categoriesQuery } from "../queries"
import { Category } from "@/types/category"

export async function getCategories(): Promise<Category[]> {
  return await client.fetch(categoriesQuery)
}