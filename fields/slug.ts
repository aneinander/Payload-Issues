import { Field } from "payload/types";
import formatSlug from "../utilities/formatSlug";


const slug: Field = {

    name: "Permalink",
    type: "group",
    fields: [
        {
          name: 'slug',
          label: 'Slug',
          type: 'text',
          admin: {
            width: "30%",
          },
          hooks: {
            beforeValidate: [
              formatSlug('title'),
            ],
          },
        },
        {
            name: "parentsite",
            label: "Parent Site",
            type: "relationship",
            relationTo: "pages",
            admin: {
                width: "30%",
            }
        },
        
    ]
};

export default slug;