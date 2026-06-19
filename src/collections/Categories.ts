import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.name && !data?.slug) {
              return data.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
            }
            return data?.slug;
          },
        ],
      },
    },
  ],
};
