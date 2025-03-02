import React from 'react';
import classnames from 'classnames';
import styles from '../pages/styles.module.css';

export default function FeaturesTwo({title, description}) {
    return (
        <div className={classnames('text--center col col--4 padding', styles.feature)}>
            <h3>{title}</h3>
            <div className={classnames(styles.featuresCTA)}>
                {description}
            </div>
        </div>
    );
}