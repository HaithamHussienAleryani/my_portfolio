import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: ProjectsIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'short_description',
            title: 'Short description',
            type: 'text',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'text',
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'text',
        }),
        defineField({
            name: 'overview',
            title: 'Overview',
            type: 'text',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'projectImage',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'technology' } }],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
        }),
        defineField({
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url',
        }),
        defineField({
            name: 'liveDemoLink',
            title: 'Live Demo Link',
            type: 'url',
        }),

        defineField({
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'screenshots',
            title: 'Screenshots',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'buildSteps',
            title: 'Build Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'step', title: 'Step', type: 'string' },
                        { name: 'command', title: 'Command', type: 'text' },
                    ],
                },
            ],
        }),
    ],
})