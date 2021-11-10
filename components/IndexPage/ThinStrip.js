import React from 'react';
import styles from '../../styles/IndexPage/ThinStrip.module.css';

function ThinStrip(props) {
    return (
        <div id={styles.thinStrip}>
        <p>WE USE THE FRESHEST INGREDIENTS</p>
            <div className={styles.overlay}></div>
        </div>
    );
}

export default ThinStrip;