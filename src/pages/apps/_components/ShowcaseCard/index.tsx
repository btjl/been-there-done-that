/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { Tags, type TagType, type App } from '@site/src/data/apps';
import Heading from '@theme/Heading';
import Image from "@theme/IdealImage";
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{ backgroundColor: color }} />
    </li>
  );
}

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  return (
    <>
      {tagObjects.map((tagObject, index) => {
        return <TagItem key={index} {...tagObject} />;
      })}
    </>
  );
}

function getCardImage(app: App): string {
  return (
    app.preview ??
    // TODO make it configurable
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      app.website,
    )}/showcase`
  );
}

function ShowcaseCard({ app }: { app: App }) {
  const image = getCardImage(app);
  return (
    <li key={app.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <Image img={image} alt={app.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={app.website} className={styles.showcaseCardLink}>
              {app.title}
            </Link>
          </Heading>
          {app.source && (
            <Link
              href={app.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}>
              <Translate id="showcase.card.sourceLink">code</Translate>
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{app.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={app.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);