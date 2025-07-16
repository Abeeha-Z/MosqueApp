import { defineType, defineField } from 'sanity'
export default defineType({
    name: 'staff',
    title: 'Staff',
    type: 'document',
    fields: [
        defineField({
            name: 'staff_name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(), //field is required
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'staff_phone_number',
            title: 'Phone Number',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'img',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'subject',
            title: 'Subject',
            type: 'string',
            validation: Rule => Rule.required(),
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
            }
        }),
    ]
})