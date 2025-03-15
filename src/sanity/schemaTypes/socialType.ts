
import {defineField, defineType} from 'sanity'
import {GlobeIcon} from "lucide-react";

export const socialType = defineType({
    name: 'social',
    title: 'Social Media',
    type: 'document',
    icon: GlobeIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'url',

        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
        }),
    ],
})
