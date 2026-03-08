export const allProductsQuery = `
*[_type == "product"]{
  _id,
  name,
  slug,
  price,
  image,
  category
}
`;

export const productBySlugQuery = `
*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  price,
  image,
  description,
  material,
  category
}
`;