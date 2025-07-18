/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from '@docusaurus/Translate';
export type TagType =
  | 'personal'


// Add sites to this list
// prettier-ignore
export const Users: User[] = [
  {
    title: 'Traveldex',
    description: 'Multi-lingual encyclopedia for common travel phrases',
    preview: require('./showcase/temp.jpg'),
    website: 'https://traveldex.vercel.app/',
    source: 'https://github.com/btjl/traveldex',
    tags: ['personal'],
  },
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

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

};

export const TagList = Object.keys(Tags) as TagType[];