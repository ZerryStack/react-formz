import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Head from "@docusaurus/Head";

import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Let's get it started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`ZerryStack | React-Formz`}
      description="Headless form library for building blazing fast forms without all of the overhead."
    >
      <Head>
        <meta property="og:url" content="https://react-formz.zerry.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ZerryStack | React Formz"
        />
        <meta
          property="og:description"
          content="Headless form library for building blazing fast forms without all of the overhead."
        />
        <meta
          property="og:image"
          content="https://react-formz.zerry.dev/img/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tanstack.com" />
        <meta property="twitter:url" content="https://react-formz.zerry.dev" />
        <meta
          name="twitter:title"
          content="ZerryStack | React Formz"
        />
        <meta
          name="twitter:description"
          content="Headless form library for building blazing fast forms without all of the overhead."
        />
        <meta
          name="twitter:image"
          content="https://react-formz.zerry.dev/img/preview.png"
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
