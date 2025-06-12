import { DocumentPdfIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const certificateType = defineType({
    name: 'certificate',
    title: 'Certificates',
    type: 'document',
    icon: DocumentPdfIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'school',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'link',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
