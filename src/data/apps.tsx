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
  | 'requires-setup'


// Add sites to this list
// prettier-ignore
export const Apps: App[] = [
  {
    title: 'Traveldex',
    description: 'Multi-lingual encyclopedia for common travel phrases',
    preview: require('./showcase/traveldex.png'),
    website: 'https://traveldex.vercel.app/',
    source: 'https://github.com/btjl/traveldex',
    tags: ['personal'],
  },
  {
    title: "Been There Done That",
    description: "Companion Blog to my YouTube videos",
    preview: require('./showcase/been-there-done-that.png'),
    website: "https://been-there-done-that.netlify.app/",
    source: "https://github.com/btjl/been-there-done-that",
    tags: ["personal", "requires-setup"]
  }
];

export type App = {
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