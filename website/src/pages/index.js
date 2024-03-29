import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/feature';
import {features} from '../components/feature-config';
import FeaturesTwo from '../components/featuresTwo';
import {featuresTwo} from '../components/featuresTwo-config';

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title"><img src="img/devops-automation/logo.svg"/></h1>
                    <p className={classnames('hero--subtitle')}>FINOS DevOps Automation Special Interest Group aims to
                        solve common engineering problems by providing a continuous compliance and assurance approach to
                        DevOps that mutually benefits banks, auditors and regulators whilst accelerating DevOps adoption
                        in engineering and FinTech IT departments.</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
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
                {features && features.length && (
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
                {featuresTwo && featuresTwo.length && (
                    <section className={styles.members}>
                        <div className="container">
                            <div>
                                <p className={classnames('working-group--title')}>Working Groups</p>
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

export default Home;
