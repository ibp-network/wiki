import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decentralised',
    Svg: require('@site/static/img/ibp-decentralised.svg').default,
    description: (
      <>
        The IBP aims to provide better User Experience (UX) by taking the
        network services to the geographical edge that is closer to where your users
        are located.
      </>
    ),
  },
  {
    title: 'Resilient',
    Svg: require('@site/static/img/ibp-resilient.svg').default,
    description: (
      <>
        Every edge deployment is built with resilience in mind: only fully owned equipment installed
        in independent datacenters around the world, with redundant power, cooling and connectivity.
      </>
    ),
  },
  {
    title: 'Sustainable',
    Svg: require('@site/static/img/ibp-sustainable.svg').default,
    description: (
      <>
        All members of the programme make a point to ensure that their equipment is powered by 100%
        renewable energy and their operations are compliant with the net-zero emissions goals.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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

export default function HomepageFeatures() {
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
