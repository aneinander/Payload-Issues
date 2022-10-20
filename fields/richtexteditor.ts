import { Field } from "payload/types";

const richtexteditor: Field =

{
    name: "uspText",
    label: "Text",
    type: "richText",
    admin: {
        leaves: [
            'bold',
            'italic',
          ],
        elements: [
            "ol",
            "ul",
            'link',
          ],

    },
};

export default richtexteditor;