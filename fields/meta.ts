import { Field } from "payload/types";

const meta: Field = {
        name: 'seo',
        label: 'SEO',
        type: 'group',
        fields: [
          {
            name: 'image',
            label: 'Featured Image',
            type: 'upload',
            relationTo: 'media',
          },
          {
            name: 'title',
            label: 'Title',
            type: 'text',
          },
          {
            name: 'description',
            label: 'Description',
            type: 'textarea',
          },
          {
            name: 'keywords',
            label: 'Keywords',
            type: 'text',
          },
        ],
};

export default meta;