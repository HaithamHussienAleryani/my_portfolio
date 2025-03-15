import {defineField, defineType} from "sanity";
import { PersonStandingIcon} from "lucide-react";

export const testimonialType = defineType({
    name: 'testimonial',
    title:'Testimonial',
    type:'document',
    icon:PersonStandingIcon,
    fields:[
        defineField({
            name: 'testimonial_image',
            title: 'Services Image',
            type: 'image',
        }),
        defineField({
            name: 'testimonial_content',
            title: 'Testimonial Content',
            type: 'string',
        }),
        defineField({
            name: 'testimonial_description',
            title: 'Testimonial Description',
            type: 'string',
        }),
        defineField({
            name: 'testimonial_name',
            title: 'Testimonial Name',
            type: 'string',
        }),

        defineField({
            name: 'testimonial_position',
            title: 'Testimonial Position',
            type: 'string',
        }),



    ]

})