import { defineType, defineField } from "sanity"

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),

    // 👇 NEW: Parent category
    defineField({
      name: "parent",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
    }),

    // 👇 OPTIONAL (for ordering)
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),

  ],
})