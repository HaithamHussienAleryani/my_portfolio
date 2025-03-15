import { defineField, defineType } from 'sanity'
import {LucideStars,} from "lucide-react";

export default defineType({
    name: 'technology',
    title: 'Technology',
    type: 'document',
    icon:LucideStars,
    fields: [
        defineField({
            name: 'title',
            title: 'Technology Name',
            type: 'string',
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