/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { translate } from '@docusaurus/Translate';
import type { ReactNode } from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import ShowcaseCards from './_components/ShowcaseCards';

const TITLE = translate({ message: 'Travel Apps Showcase' });
const DESCRIPTION = translate({
  message: 'Apps I built for traveling',
});

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
    </section>
  );
}

export default function Showcase(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </Layout>
  );
}
