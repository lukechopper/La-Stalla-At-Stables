import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import { start } from 'nprogress';

function Map(props) {

    const [showMarker, setShowMarker] = useState(false);
    const [startPlace, setStartPlace] = useState(null);

    useEffect(() => {
        if(typeof window !== "undefined"){
            window.navigator.geolocation.getCurrentPosition(setLocation, failLocation);
        }
    }, []);

    const setLocation = (loc) => {
        loc = loc.coords;
        setStartPlace({lat: loc.latitude, lng: loc.longitude});
    }

    const failLocation = () => {
        setStartPlace("FAIL");
    }

    const apiIsLoaded = (map, maps) => {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        directionsRenderer.setOptions({
            preserveViewport: true
        });
        const origin = { lat: startPlace.lat, lng: startPlace.lng };
        const destination = { lat: props.lat, lng: props.lng };
  
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      };

    return (
        startPlace !== "FAIL" && startPlace !== null ?
        <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAP}}
        center={{lat: props.lat, lng: props.lng}}
        zoom={18}
        onClick={() => setShowMarker(false)}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}>
        </GoogleMapReact> : startPlace !== null ? <GoogleMapReact
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
        </GoogleMapReact> : null
    );
}

Map.defaultProps = {
    lat: 52.367451,
    lng: -1.808420
}

export default Map;