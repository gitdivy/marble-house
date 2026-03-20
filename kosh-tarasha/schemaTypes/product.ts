import { defineType, defineField } from "sanity"
  

export default defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [

    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),

    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "material",
      title: "Material",
      type: "string",
    }),

    // ✅ FIXED DESCRIPTION
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          lists: [{ title: "Bullet", value: "bullet" }],
        },
      ],
    }),

    defineField({
      name: "finish",
      title: "Finish",
      type: "string",
    }),

    defineField({
      name: "weight",
      title: "Weight",
      type: "string",
    }),

    defineField({
      name: "origin",
      title: "Origin",
      type: "string",
    }),

    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
    }),

  ],
})