import { defineType, defineField } from 'sanity'
export default defineType({
    name: 'lesson',
    title: 'Lesson',
    type: 'document',
    fields: [
        defineField({
            name: 'lesson_link',
            title: 'Lesson Link',
            type: 'url',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'type_of_subject',
            title: 'Subject',
            type: 'string',
            options: {
                list: [
                    {title: 'jsjs', value: 'jsjs'},
                    {title: 'jsjs', value: 'jsjs'},
                    {title: 'jsjs', value: 'jsjs'},
                    {title: 'jsjs', value: 'jsjs'},
                    {title: 'jsjs', value: 'jsjs'},
                    {title: 'jsjs', value: 'jsjs'},
                    {title: 'jsjs', value: 'jsjs'},
                    {title: 'jsjs', value: 'jsjs'},
                ]
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',

        })
    ],
})