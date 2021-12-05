import React from 'react';
import styles from '../../styles/IndexPage/MapContainer.module.css';
import DocumentContainer from '../DocumentContainer';
import MapBox from '../Map/MapBox';

function MapContainer(props) {

    return (
        <div id={styles.mapContainer}>
            <p>come dine in</p>
            <p>hours and location</p>
            <div className={styles.hours}>
                <p>Tuesday — Sunday</p>
                <p>12am — 10pm</p>
            </div>
            <DocumentContainer>
            <section id={styles.mapPart}>
                <div className={styles.text}>
                    <p style={{color: "green"}}>La Stalla At Balsall</p>
                    <p>299 Kenilworth Road</p>
                    <p>Coventry, CV7 7EL</p>
                    <div className={styles.gap_between_place_and_phone}></div>
                    <p>01676 248143</p>
                </div>
                <div className={styles.realMap}>
                    <MapBox height='250px' />
                </div>
            </section>
            </DocumentContainer>
        </div>
    );
}

export default MapContainer;