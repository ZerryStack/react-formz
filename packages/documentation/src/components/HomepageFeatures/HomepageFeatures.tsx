import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Performant',
    Svg: require('@site/static/img/undraw_delivery_truck_vt6p.svg').default,
    description: (
      <>
        React-Formz was built to solve performance issues that arise in other form libraries
        caused by large forms. Laggy keystrokes can make applications
        feel extremely slow and result in poor user experience. 
        React-Formz performance is near constant across any number of components.
      </>
    ),
  },
  {
    title: 'Declarative & Automatic',
    Svg: require('@site/static/img/undraw_start_building_re_xani.svg').default,
    description: (
      <>
        React Formz takes care of all of the complexities that arise with form state, accessibility
        and validation. It was designed to be usable by developers of any skill level and comes
        with several out-of-the-box features that will help you save time.
      </>
    ),
  },
  {
    title: 'Unopinionated',
    Svg: require('@site/static/img/undraw_things_to_say_re_jpcg.svg').default,
    description: (
      <>
        React Formz does not care how you want to write your react code. You can use hooks
        or you can use components. The performance and features are the same regardless. 
        No need to migrate all of your code to hooks or vice versa. Keep your work flow
        and stay sane.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
