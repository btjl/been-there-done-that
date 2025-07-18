import Layout from '@theme/Layout';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './index.module.css'; // custom CSS

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Welcome to my travel blog and vlog companion site">
      <main className={clsx('container', styles.mainContent)}>
        <div className="text--center margin-vert--xl">
          <h1 className="hero__title">Blog companion to my vlogs</h1>
          <p className="hero__subtitle">
            Vlogs is a companion site for my travel vlogs.
          </p>
          <p className="hero__subtitle">
            Community is a dedication to my fans.
          </p>
        </div>
      </main>
    </Layout>
  );
}
