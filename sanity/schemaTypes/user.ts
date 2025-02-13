import { defineField, defineType } from "sanity";

export const userType = defineType({
    title: "User",
    name: "user",
    type: "document",
    fields: [
        defineField({
            title: "Email",
            name: "email",
            type: "string"
        }),
        defineField({
            title: "Name",
            name: "name",
            type: "string"
        }),
        // rewatch video for this section
        defineField({
            title: "Picture URL",
            name: "picture_url",
            type: "string"
        }),
    ]
})
