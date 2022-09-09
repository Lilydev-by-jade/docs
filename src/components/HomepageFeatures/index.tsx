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
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        Most, if not all of my projects, are open source. View my <a href='https://github.com/jadelily18'>GitHub</a> for source code!
      </>
    ),
  },
  {
    title: 'Cohesive Documentation',
    Svg: require('@site/static/img/undraw_folder_files.svg').default,
    description: (
      <>
        Most of my projects will be documented! Currently a work in progress! :)
      </>
    ),
  },
  {
    title: 'Contributions Welcome',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        Since everything is open source, everyone is free to contribute in my GitHub repositories!
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

export default function HomepageFeatures(): JSX.Element {
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
