import React, {useEffect} from 'react';
import {useGlobalContext} from '../context/GlobalContext';
import DocumentContainer from '../components/DocumentContainer';
import styles from '../styles/locations.module.css';
import Map from '../components/Map/Map';

function locations(props) {

    const {assignCurrentPage} = useGlobalContext();

    useEffect(() => {
        assignCurrentPage(4);
    }, []);

    return (
        <div>
          <DocumentContainer>
            <p id={styles.header}>La Stalla At Balsall <a href="https://www.facebook.com/lastalla.jarocka" target="_blank"> <i className="fab fa-facebook" id={styles.facebookIcon}></i></a></p>
            <p className={styles.subHeader}>Your local Italian.</p>
            <section id={styles.mainSect}>
            <div id={styles.sectText}>
                <h1>La Stalla At Balsall</h1>
                <p>299 Kenilworth Road</p>
                <p>Coventry, CV7 7FE</p>
                <a href="tel:+4401676248143" style={{textDecoration: "underline"}}><p style={{display: "inline"}}>Tel: 01676 248143</p></a>
            </div>
            <div id={styles.mapContainer}>
                <Map />
            </div>
            </section>
          </DocumentContainer>  
        </div>
    );
}

export default locations;