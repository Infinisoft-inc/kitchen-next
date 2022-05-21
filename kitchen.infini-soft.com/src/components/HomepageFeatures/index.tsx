import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <><Link className='link'><a className='zoom'>Cli</a></Link></>,
    Svg: require('@site/static/img/clarity_command-line.svg').default,
    description: (
      <>
       Automate repeating tasks.
      </>
    ),
  },
  {
    title: <><Link className='link'><a className='zoom'>Libraries</a></Link></>,
    Svg: require('@site/static/img/codicon_book.svg').default,
    description: (
      <>
        Documentation and examples.
      </>
    ),
  },
  {
    title: <><Link className='link'>Schemas</Link></>,
    Svg: require('@site/static/img/ic_outline-schema.svg').default,
    description: (
      <>
        JSON Schema Collection.
      </>
    ),
  },
  {
    title: <><Link className='link'>Templates</Link></>,
    Svg: require('@site/static/img/heroicons-outline_template.svg').default,
    description: (
      <>
        Scafolding quickly using templates.
      </>
    ),
  },
  {
    title: <><Link className='link'>Components</Link></>,
    Svg: require('@site/static/img/logos_react.svg').default,
    description: (
      <>
        Reusable simple components.
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
