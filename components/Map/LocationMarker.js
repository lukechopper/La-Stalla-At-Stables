import React, {useState} from 'react';
import styles from '../../styles/Map/LocationMarker.module.css';

function LocationMarker(props) {


    return (
        <div className={styles.locationMarker} onClick={() => props.setShowMarker(prev => !prev)}>
        {props.showMarker &&
        <div>
            <p style={{color: "green"}}>{props.title}</p>
            <p>{props.desc1}</p>
            <p>{props.desc2}</p>
            <p>{props.desc3}</p>
        </div>
        }

            <i className="fas fa-map-marker-alt"></i>
        </div>
    );
}

export default LocationMarker;