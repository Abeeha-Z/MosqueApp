import { defineType, defineField } from 'sanity'
export default defineType({
    name: 'Calender_event',
    title: 'Calender Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array', //use array and block if you want paragraphs
            of: [{type: 'block'}],
        }),
    ],
})