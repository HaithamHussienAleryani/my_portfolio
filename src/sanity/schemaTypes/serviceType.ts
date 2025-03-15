import {defineField, defineType} from "sanity";
import {MoreVerticalIcon} from "lucide-react";

export const serviceType = defineType({
    name: 'service',
    title:'Service',
    type:'document',
    icon:MoreVerticalIcon,
    fields:[
        defineField({
            name: 'services_icon',
            title: 'Services Icon',
            type: 'image',
        }),
        defineField({
            name: 'services_header',
            title: 'Services Header',
            type: 'string',
        }),
        defineField({
            name: 'services_description',
            title: 'Services Description',
            type: 'string',
        }),



    ]

})