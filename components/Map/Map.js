import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

function Map(props) {

    const [showMarker, setShowMarker] = useState(false);


    return (
        <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAP}}
        center={{lat: props.lat, lng: props.lng}}
        zoom={20}
        onClick={() => setShowMarker(false)}>
        <LocationMarker lat={props.lat} lng={props.lng}
            title="La Stalla At Balsall"
            desc1="299 Kenilworth Road"
            desc2="Coventry, CV7 7FE"
            desc3="01676 248143"
            setShowMarker={setShowMarker}
            showMarker={showMarker}
        />
        </GoogleMapReact> 
    );
}

Map.defaultProps = {
    lat: 52.392011,
    lng: -1.650010
}

export default Map;