import { Field } from "payload/types";
import formatSlug from "../utilities/formatSlug";


const Author: Field = {

  name: "Author",
  type: "group",
  fields: [
      {
        name: "users",
        label: "Users",
        type: "relationship",
        relationTo: "users",
        admin: {
            width: "30%",
        } 
      }    
  ],

};

export default Author;