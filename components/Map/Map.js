import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

function Map(props) {

    const [showMarker, setShowMarker] = useState(false);

    return (
        <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyBDB4NdOsRQKiPAglkqkGUpx4wbO_cXeqg"}}
        center={{lat: 52.367451, lng: -1.808420}}
        zoom={18}
        onClick={() => setShowMarker(false)}>
        <LocationMarker lat={52.367451} lng={-1.808420}
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

export default Map;