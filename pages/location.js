import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../context/GlobalContext';
import DocumentContainer from '../components/DocumentContainer';
import styles from '../styles/locations.module.css';
import MapBox from '../components/Map/MapBox';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

function locations(props) {

    const {assignCurrentPage, windowWidth} = useGlobalContext();
    const [stringWindowWidth, setStringWindowWidth] = useState(null);

    useEffect(() => {
        assignCurrentPage(4);
    }, []);

    useEffect(() => {
        if(!windowWidth) return;
        if(windowWidth > 600){
            setStringWindowWidth('large');
        }else if(windowWidth < 601){
            setStringWindowWidth('small');
        }
    }, [windowWidth]);

    return (
        <div>
          <DocumentContainer>
            <p id={styles.header}>La Stalla At Balsall <a href="https://www.facebook.com/lastalla.jarocka" target="_blank"> 
            <FontAwesomeIcon icon={faFacebook} id={styles.facebookIcon} /></a></p>
            <p className={styles.subHeader}>Your local Italian.</p>
            <section id={styles.mainSect}>
            <div id={styles.sectText}>
                <h1>La Stalla At Balsall</h1>
                <p>299 Kenilworth Road</p>
                <p>Coventry, CV7 7EL</p>
                <a href="tel:+4401676248143" style={{textDecoration: "underline"}}><p style={{display: "inline"}}>Tel: 01676 248143</p></a>
            </div>
            <div id={styles.mapContainer}>
                {stringWindowWidth === 'large' ? <MapBox height='600px' /> : stringWindowWidth === 'small' ? <MapBox height='400px' /> 
                : null}
            </div>
            </section>
          </DocumentContainer>  
        </div>
    );
}

export default locations;