
import { Field } from 'payload/types';

const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'radio',
  label: 'Background Color',
  defaultValue: 'none',
  admin: {
    layout: 'horizontal',
  },
  options: [
    {
        label: 'Black',
        value: 'Black',
      },
      {
        label: 'White',
        value: 'white',
      },
      {
        label: 'Grey',
        value: 'grey',
      },
      {
        label: 'Transparent',
        value: 'transparent',
      },
  ],
};

export default backgroundColor;