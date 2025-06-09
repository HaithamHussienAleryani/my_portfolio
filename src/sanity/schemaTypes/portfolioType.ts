import { defineField, defineType } from "sanity";
import { ListIcon } from "lucide-react";

export const portfolioContentType = defineType({
    name: 'portfolio_content',
    title: 'Portfolio content',
    type: 'document',
    icon: ListIcon,
    fields: [
        defineField({
            name: 'hero_greating',
            title: 'Hero Greating',
            type: 'string',
        }),
        defineField({
            name: 'hero_header',
            title: 'Hero Header',
            type: 'string',
        }),
        defineField({
            name: 'hero_sub_header',
            title: 'Hero Subheader',
            type: 'string',
        }),

        defineField({
            name: 'hero_image',
            title: 'Hero Image',
            type: 'image',
        }),

        defineField({
            name: 'hero_cv',
            title: 'Hero CV',
            type: 'file',
        }),

        defineField({
            name: 'hero_clients',
            title: 'Hero Clients',
            type: 'array',
            of: [{ type: 'image' }]
        }),

        defineField({
            name: 'about_title',
            title: 'About Title',
            type: 'string',
        }),

        defineField({
            name: 'about_subtitle',
            title: 'About Subtitle',
            type: 'string',
        }),


        defineField({
            name: 'about_button',
            title: 'About Button',
            type: 'string',
        }),

        defineField({
            name: 'services_title',
            title: 'Services Title',
            type: 'string',
        }),

        defineField({
            name: 'services_subtitle',
            title: 'Services Subtitle',
            type: 'string',
        }),


        defineField({
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'service' } }]
        }),


        defineField({
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'project' } }]
        }),


        defineField({
            name: 'choose_me_title',
            title: 'Choose me title',
            type: 'string',
        }),

        defineField({
            name: 'choose_me_subtitle',
            title: 'Choose Me Subtitle',
            type: 'string',
        }),

        defineField({
            name: 'choose_me_image',
            title: 'Choose Me Background Image',
            type: 'image',
        }),


        defineField({
            name: 'choose_me_services',
            title: 'Choose Me Services',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'service' } }],
        }),


        defineField({
            name: 'testimonial_title',
            title: 'Testimonial Title',
            type: 'string',
        }),


        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'testimonial' } }],
        }),


        defineField({
            name: 'contact_title',
            title: 'Contact Title',
            type: 'string',
        }),

        defineField({
            name: 'contact_subtitle',
            title: 'Contact Subtitle',
            type: 'string',
        }),


        defineField({
            name: 'contact_email',
            title: 'Contact Email',
            type: 'email',
        }),

        defineField({
            name: 'contact_phone',
            title: 'Contact Phone',
            type: 'string',
        }),

        defineField({
            name: 'contact_address',
            title: 'Contact Address',
            type: 'string',
        }),


        defineField({
            name: 'footer_description',
            title: 'Footer Description',
            type: 'string',
        }),


        defineField({
            name: 'social_media',
            title: 'social media',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'social_media' } }],
        }),



    ],
})