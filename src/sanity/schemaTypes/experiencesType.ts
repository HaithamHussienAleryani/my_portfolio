import { defineType, defineField } from 'sanity';

export const experiencesType = defineType({
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        }),

        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'dateRange',
            title: 'Date Range',
            type: 'object',
            fields: [
                defineField({
                    name: 'startDate',
                    title: 'Start Date',
                    type: 'date',
                }),
                defineField({
                    name: 'endDate',
                    title: 'End Date',
                    type: 'date',
                    hidden: ({ parent }) => parent?.present,
                }),
                defineField({
                    name: 'present',
                    title: 'Present',
                    type: 'boolean',
                    initialValue: false,
                }),
            ],
        }),

    ],
});
