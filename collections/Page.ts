import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import formatSlug from '../utilities/formatSlug';
import { Image, Type as ImageType } from '../blocks/Image';
import { CallToAction, Type as CallToActionType } from '../blocks/CallToAction';
import backgroundColor from '../fields/backgroundColor';
import breadcrumb from '../fields/breadcrumb';
import Author from '../fields/author';
import slug from '../fields/slug';
import meta from '../fields/meta';

export type Layout = CallToActionType 

export type Type = {
  title: string
  slug: string
  image?: MediaType
  layout: Layout[]
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}

export const Page: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Seite',
    plural: 'Seiten',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Seiten Titel',
      type: 'text',
      required: true,
      admin: {
        width: "30%",
        description: "Permalink kann in den Seiten Einstellungen bearbeitet werden."
      }
    },
    slug,  
  ]
};

export default Page;
