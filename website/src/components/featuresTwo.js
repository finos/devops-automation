import React from 'react';
import clsx from 'clsx';
import styles from '../pages/styles.module.css';

export default function FeaturesTwo({title, description}) {
    return (
        <div className={clsx('text--center col col--4 padding', styles.feature)}>
            <h3>{title}</h3>
            <div className={clsx(styles.featuresCTA)}>
                {description}
            </div>
        </div>
    );
}