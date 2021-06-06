import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

function Map(props) {

    const [showMarker, setShowMarker] = useState(false);


    return (
        <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAP}}
        center={{lat: props.lat, lng: props.lng}}
        zoom={18}
        onClick={() => setShowMarker(false)}>
        <LocationMarker lat={props.lat} lng={props.lng}
            title="La Stalla At Stables"
            desc1="100 Illshaw Heath Road"
            desc2="Solihull, B94 6DL"
            desc3="01564 703314"
            setShowMarker={setShowMarker}
            showMarker={showMarker}
        />
        </GoogleMapReact> 
    );
}

Map.defaultProps = {
    lat: 52.367451,
    lng: -1.808420
}

export default Map;