
import { Field } from 'payload/types';
import slug from './slug';

const breadcrumb: Field = {
    name: "breadcrumbs",
    type: "group",
    fields: [
        {
            name: 'breadcrumb',
            type: 'checkbox',
            label: 'Breadcrumbs?',
            defaultValue: true,
        },        
    ]
};

export default breadcrumb;