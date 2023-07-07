import React from 'react';
import styles from './styles.module.css'


export default ({children, image, name, organisation}) => {
    return <div className={styles.bio}>
        <img className={styles.headshot} src={image} alt={name} />
        <div className={styles.details}>
            <h4>{name} - {organisation}</h4>
            <div className={styles.description}>
                {children}
            </div>
        </div>
    </div>
}