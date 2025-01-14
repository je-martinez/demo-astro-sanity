import { defineField, defineType } from "sanity";

export const postsType = defineType({
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "blurb",
      title: "Blurb",
      type: "text",
    }),
  ],
});
