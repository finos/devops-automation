import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/feature';
import {features} from '../components/feature-config';
import FeaturesTwo from '../components/featuresTwo';
import {featuresTwo} from '../components/featuresTwo-config';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title"><img src="img/devops-automation/logo.svg" alt="Logo"/></h1>
                    <p className={clsx('hero--subtitle')}>FINOS DevOps Automation Special Interest Group aims to
                        solve common engineering problems by providing a continuous compliance and assurance approach to
                        DevOps that mutually benefits banks, auditors and regulators whilst accelerating DevOps adoption
                        in engineering and FinTech IT departments.</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={'mailto:devops-automation+subscribe@finos.org?subject=Subscribe'}>
                            SUBSCRIBE
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                {featuresTwo && featuresTwo.length > 0 && (
                    <section className={styles.members}>
                        <div className="container">
                            <div>
                                <p className={clsx('working-group--title')}>Working Groups</p>
                            </div>
                            <div className="row row--center">
                                <h2></h2>
                            </div>
                            <div className="row">
                                {featuresTwo.map((props, idx) => (
                                    <FeaturesTwo key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}
