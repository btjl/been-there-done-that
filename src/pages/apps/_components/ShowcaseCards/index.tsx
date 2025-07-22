/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import type { ReactNode } from 'react';
import ShowcaseCard from '../ShowcaseCard';

import { App, Apps } from "@site/src/data/apps";

import styles from './styles.module.css';


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