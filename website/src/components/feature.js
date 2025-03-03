import React from 'react';
import clsx from 'clsx';
import styles from '../pages/styles.module.css';

export default function Feature({title, description}) {
    var defined = function (property) {
        return typeof property !== 'undefined';
    };

    return (
        <div>
            <h3>{title}</h3>
            <div className={clsx(styles.featureAbout)}>{description}</div>
        </div>
    );
}