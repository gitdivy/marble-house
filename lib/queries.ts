import { groq } from "next-sanity"

/* ===============================
   CATEGORIES (FLAT - OPTIONAL)
================================ */

export const categoriesQuery = groq`
*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}
`

/* ===============================
   CATEGORIES WITH SUBCATEGORIES
   (MEGA MENU - IMPORTANT)
================================ */

export const categoriesWithChildrenQuery = groq`
*[_type == "category" && !defined(parent)] | order(order asc) {
  _id,
  title,
  "slug": slug.current,

  "children": *[
    _type == "category" &&
    parent._ref == ^._id
  ] | order(order asc) {
    _id,
    title,
    "slug": slug.current,

    // ✅ FIXED: safe image fetch
    "image": coalesce(
      *[_type == "product" && category._ref == ^._id][0].images[0].asset->url,
      ""
    )
  }
}
`

/* ===============================
   ALL PRODUCTS
================================ */

export const allProductsQuery = groq`
*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,
  price,
  "image": coalesce(images[0].asset->url, image.asset->url),
  "category": category->slug.current
}
`

/* ===============================
   PRODUCT BY SLUG
================================ */

export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  price,

  "category": category->{
    title,
    "slug": slug.current
  },

  material,
  description,
  stock,
  finish,
  weight,
  origin,

  "images": images[].asset->url
}
`

/* ===============================
   PRODUCTS BY CATEGORY
================================ */

export const productsByCategoryQuery = groq`
*[_type == "product" && category->slug.current == $category]{
  _id,
  name,
  "slug": slug.current,
  price,
  "image": images[0].asset->url,
  "category": category->slug.current
}
`

/* ===============================
   RELATED PRODUCTS (OPTIONAL - LUXURY UX)
================================ */

export const relatedProductsQuery = groq`
*[
  _type == "product" &&
  category->slug.current == $category &&
  slug.current != $slug
][0...4]{
  _id,
  name,
  "slug": slug.current,
  price,
  "image": images[0].asset->url
}
`