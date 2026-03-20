import { client } from "../sanityClient"
import {
  allProductsQuery,
  productBySlugQuery,
  productsByCategoryQuery
} from "../queries"

export async function getAllProducts() {
  return client.fetch(allProductsQuery)
}

export async function getProduct(slug: string) {
  return client.fetch(productBySlugQuery, { slug })
}

export async function getProductsByCategory(category: string) {
  return client.fetch(productsByCategoryQuery, { category })
}