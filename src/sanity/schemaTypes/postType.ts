import {DocumentTextIcon} from '@sanity/icons'
import {
  defineArrayMember,
  defineField,
  defineType,
  type StringRule,
  type SlugRule,
  type ReferenceRule,
  type DatetimeRule,
  type TextRule,
  type ArrayRule,
  type Rule, // Added Rule type
} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (rule: ReferenceRule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      // Example validation: require at least one category
      // validation: (rule: Rule) => rule.min(1).error('Please select at least one category.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule: DatetimeRule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'A short summary of the post (for SEO and previews).',
      type: 'text',
      rows: 3,
      validation: (rule: TextRule) => rule.max(200).warning('Excerpt should ideally be under 200 characters.'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      description: 'Mark this post as featured to highlight it on the website.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      description: 'Custom title for search engine results. If empty, the main title will be used.',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      description: 'Custom description for search engine results. If empty, the excerpt will be used.',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
      featured: 'featured',
    },
    prepare(selection) {
      const {author, date, featured} = selection
      const subtitles = [
        author && `by ${author}`,
        date && `${new Date(date).toLocaleDateString()}`,
        featured && '🌟 Featured',
      ].filter(Boolean)
      return {...selection, subtitle: subtitles.join(' | ')}
    },
  },
})
