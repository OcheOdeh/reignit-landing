import {TagIcon} from '@sanity/icons'
import {
  defineField,
  defineType,
  type StringRule,
  type SlugRule,
  type TextRule,
} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: SlugRule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      // Optional: Add validation for description length
      // validation: (rule: TextRule) => rule.max(250).warning('Description should ideally be under 250 characters.'),
    }),
  ],
})
