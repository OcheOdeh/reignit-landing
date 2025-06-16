import {UserIcon} from '@sanity/icons'
import {
  defineField,
  defineType,
  type StringRule,
  type SlugRule,
  type Rule,
} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule: SlugRule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text (for accessibility)',
          type: 'string',
          validation: (rule: StringRule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'blockContent', // Changed from basic array of blocks to full blockContent
      // validation: (rule: Rule) => rule.required(), // Optional: make bio required
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
