import React from 'react';
import styles from '../../styles/IndexPage/MapContainer.module.css';
import DocumentContainer from '../DocumentContainer';
import Map from '../Map/Map';

function MapContainer(props) {

    return (
        <div id={styles.mapContainer}>
            <p>come dine in</p>
            <p>hours and location</p>
            <div className={styles.hours}>
                <p>Monday — Saturday</p>
                <p>5pm — 10pm</p>
            </div>
            <DocumentContainer>
            <section id={styles.mapPart}>
                <div className={styles.text}>
                    <p style={{color: "green"}}>La Stalla At Balsall</p>
                    <p>299 Kenilworth Road</p>
                    <p>Coventry, CV7 7FE</p>
                    <br/>
                    <p>01676 248143</p>
                </div>
                <div className={styles.realMap}>
                    <Map />
                </div>
            </section>
            </DocumentContainer>
        </div>
    );
}

export default MapContainer;