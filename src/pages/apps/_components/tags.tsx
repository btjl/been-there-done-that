import { translate } from '@docusaurus/Translate';

export type TagType =
  | 'personal'
  | 'requires-setup'

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  personal: {
    label: translate({ message: 'Personal' }),
    description: translate({
      message:
        'Personal projects',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },
  "requires-setup": {
    label: translate({ message: 'Requires setup' }),
    description: translate({
      message:
        'Requires Setup',
      id: 'showcase.tag.requires-setup.description',
    }),
    color: '#148ecf',
  }
};

export const TagList = Object.keys(Tags) as TagType[];