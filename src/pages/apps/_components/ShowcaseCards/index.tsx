/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import type { ReactNode } from 'react';
import ShowcaseCard from '../ShowcaseCard';

import Translate from '@docusaurus/Translate';
import { User, Users } from "@site/src/data/users";

import styles from './styles.module.css';
import Heading from '@theme/Heading';


function HeadingAllSites() {
  return (
    <Heading as="h2">
      <Translate id="showcase.usersList.allUsers">All sites</Translate>
    </Heading>
  );
}

function CardList({ heading, items }: { heading?: ReactNode; items: User[] }) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} user={item} />
        ))}
      </ul>
    </div>
  );
}


export default function ShowcaseCards() {

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <CardList items={Users} />
    </section>
  );
}