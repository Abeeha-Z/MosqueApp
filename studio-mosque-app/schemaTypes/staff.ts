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
                    {title: '', value: ''}
                ]
            }
        }),
    ]
})