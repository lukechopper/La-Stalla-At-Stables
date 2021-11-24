import React,{useRef,useEffect,useMemo} from 'react';
import mapboxgl from '!mapbox-gl';
import styles from '../../styles/Map/mapBox.module.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

function MapBox(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const mapContainerStyles = useMemo(() => {
        return {
            height: props.height
        };
    }, []);

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [props.lng, props.lat+0.0001],
            zoom: props.zoom
        });

        const popup = new mapboxgl.Popup({ closeOnClick: false })
            .setHTML(`<div class="${styles.infoBox}">
                      <p class="${styles.green}">La Stalla At Balsall</p>
                      <p>299 Kenilworth Road</p>
                      <p>Coventry, CV7 7FE</p>
                      <p>01676 248143</p>
                      </div>`);

        const marker = new mapboxgl.Marker({color: 'red'}).setLngLat([props.lng, props.lat])
            .setPopup(popup)
            .addTo(map.current);

        return () => map.current.remove();
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map-container" style={mapContainerStyles} />
        </div>
    );
}

MapBox.defaultProps = {
    lat: 52.392011,
    lng: -1.650010,
    zoom: 18
};

export default MapBox;