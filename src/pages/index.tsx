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
          <div className={clsx("margin-bottom--lg", styles.homePageVideoContainer)}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/img/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className='hero__subtitle'>Welcome to my humble blog for my vlogs
          </h1>
        </div>
      </main>
    </Layout>
  );
}