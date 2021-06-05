import React, {useEffect} from 'react';
import {useGlobalContext} from '../context/GlobalContext';
import DocumentContainer from '../components/DocumentContainer';
import styles from '../styles/locations.module.css';
import Map from '../components/Map/Map';

function locations(props) {

    const {assignCurrentPage} = useGlobalContext();

    useEffect(() => {
        assignCurrentPage(4);
    }, [])

    return (
        <div>
          <DocumentContainer>
            <p id={styles.header}>La Stalla At Cottage Farm Stables <a href="https://www.facebook.com/lastalla.jarocka" target="_blank"> <i className="fab fa-facebook" id={styles.facebookIcon}></i></a></p>
            <p className={styles.subHeader}>Restaurant located at a British Horse Society Riding Centre.</p>
            <section id={styles.mainSect}>
            <div id={styles.sectText}>
                <h1>Cottage Farm Stables</h1>
                <p>100 Illshaw Heath Road</p>
                <p>Solihull, B94 6DL</p>
                <a href="tel:+4401564703314" style={{textDecoration: "underline"}}><p>Tel: 01564 703314</p></a>
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