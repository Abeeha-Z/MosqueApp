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
            // validation: Rule => Rule.required(), not required because for activities required wouldn't make sense
        }),
        defineField({
            name: 'doc_type',
            title: 'Document Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Assessment', value: 'assessment'},
                    {title: 'Lesson', value: 'lesson'},
                    {title: 'Activity', value: 'activity'},
                ]
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'type_of_subject',
            title: 'Subject',
            type: 'string',
            options: {
                list: [
                    {title: 'Islamic History', value: 'islamic_history'},
                    {title: 'Salah', value: 'salah'},
                    {title: 'Islamic Studies', value: 'islamic_studies'},
                    {title: 'Arabic', value: 'arabic'},
                    {title: 'Surahs', value: 'surahs'},
                    {title: 'Tafseer', value: 'tafseer'},
                    {title: 'Contemporary Issues', value: 'c_issues'},
                    {title: 'Hadith', value: 'hadith'},
                ]
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'class_level',
            title: 'Level',
            type: 'string',
            options: {
                list: [
                    {title: 'Level 1AG1', value: '1AG1'},
                    {title: 'Level 1AG2', value: '1AG2'},
                    {title: 'Level 1B', value: '1B'},
                    {title: 'Level 1C', value: '1C'},
                    {title: 'Level 2', value: '2'},
                    {title: 'Level 3', value: '3'},
                    {title: 'Level 4', value: '4'},
                    {title: 'Level 5', value: '5'},
                ]
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',

        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],  //this is for paragraphs/rich text btw

        })
    ],
})