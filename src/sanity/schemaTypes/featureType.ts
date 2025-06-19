import { DocumentPdfIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const featureType = defineType({
    name: 'feature',
    title: 'Features',
    type: 'document',
    icon: DocumentPdfIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),

    ],
})
