import { UsersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const contactMeType = defineType({
    name: 'contact_me',
    title: 'About me',
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


        defineField({
            name: 'what_i_do_title',
            title: 'What i do title',
            type: 'string',
        }),

        defineField({
            name: 'what_i_do_subtitle',
            title: 'What i do subtitle',
            type: 'string',
        }),

        defineField({
            name: 'what_i_do_items',
            title: 'What i do items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'experience' } }],
        }),


        defineField({
            name: 'experience_title',
            title: 'Experience title',
            type: 'string',
        }),

        defineField({
            name: 'experience_subtitle',
            title: 'Experience subtitle',
            type: 'string',
        }),

        defineField({
            name: 'experiences_list',
            title: 'Experiences list',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'experiences' } }],
        }),


        defineField({
            name: 'certificates_list',
            title: 'Certificates list',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'certificate' } }],
        }),




    ],
})
