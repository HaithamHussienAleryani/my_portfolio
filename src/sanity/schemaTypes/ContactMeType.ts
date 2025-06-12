import { UsersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const contactMeType = defineType({
    name: 'contact_me',
    title: 'Contact me',
    type: 'document',
    icon: UsersIcon,
    fields: [
        defineField({
            name: 'header',
            title: 'Header',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subheader',
            title: 'Subheader',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'resumeLink',
            title: 'Resume Link',
            type: 'url',
            validation: (rule) => rule.required(),
        }),


    ],
})
