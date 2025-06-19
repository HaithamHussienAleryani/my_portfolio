import { defineField, defineType } from 'sanity'
import { LucideStars, } from "lucide-react";

export default defineType({
    name: 'technology',
    title: 'Technology',
    type: 'document',
    icon: LucideStars,
    fields: [
        defineField({
            name: 'title',
            title: 'Technology Name',
            type: 'string',
        }),
        defineField({
            name: 'invert',
            title: 'Invert icon',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

    ],
})