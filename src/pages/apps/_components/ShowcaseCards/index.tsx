/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import type { ReactNode } from 'react';
import ShowcaseCard from '../ShowcaseCard';
import { TagType } from '../tags';
import styles from './styles.module.css';

export type App = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export const Apps: App[] = [
  {
    title: 'Traveldex',
    description: 'Multi-lingual encyclopedia for common travel phrases',
    preview: require('/img/apps/traveldex.png'),
    website: 'https://traveldex.vercel.app/',
    source: 'https://github.com/btjl/traveldex',
    tags: ['personal'],
  },
  {
    title: "Been There Done That",
    description: "Companion Blog to my YouTube videos",
    preview: require('/img/apps/been-there-done-that.png'),
    website: "https://been-there-done-that.netlify.app/",
    source: "https://github.com/btjl/been-there-done-that",
    tags: ["personal", "requires-setup"]
  }
];


function CardList({ heading, items }: { heading?: ReactNode; items: App[] }) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} app={item} />
        ))}
      </ul>
    </div>
  );
}


export default function ShowcaseCards() {

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <CardList items={Apps} />
    </section>
  );
}