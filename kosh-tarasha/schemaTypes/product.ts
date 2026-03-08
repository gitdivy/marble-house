import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',

  fields: [

    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string'
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number'
    }),

    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true }
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string'
    }),

    defineField({
      name: 'material',
      title: 'Material',
      type: 'string'
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),

    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number'
    })

  ]
})