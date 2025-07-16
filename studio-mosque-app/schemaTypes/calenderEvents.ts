import { defineType, defineField } from 'sanity'
export default defineType({
    name: 'Calender_event',
    title: 'Calender Event',
    type: 'document',
    fields: [
        defineField({
            name: 'event_title',
            title: 'Event',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: Rule => Rule.required(),
            options: {
            dateFormat: 'hh:mm A', // yyyy/mm/dd
  }
        }),
        defineField({
            name: 'time',
            title: 'Time',
            type: 'datetime', 
            validation: Rule => Rule.required(),
            options: {
            timeFormat: 'hh:mm A', // hh:mm for 24-hour, hh:mm A for 12-hour with AM/PM
  }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array', //use array and block if you want paragraphs
            of: [{type: 'block'}],
        }),
    ],
})