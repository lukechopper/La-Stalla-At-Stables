import React,{useState, useEffect, useRef} from 'react';
import galleryStyle from '../styles/gallery.module.css';

function Image({img, styles, setImage}) {

    const [loaded, setLoaded] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        if(imageRef.current.complete){
            setLoaded(true);
        }
    }, []);

    return (
        <div className={[styles.join(' '),loaded ? galleryStyle.imgContainerPointer : null].join(' ')} onClick={() => {if(!loaded){return} setImage(img)}}>
        { !loaded ?
            <div className={galleryStyle.imgLoading}>
                <div className={galleryStyle.loader}></div>
            </div> : null
        }
            <div className={galleryStyle.imgOverlay}></div>
            <img src={img.img} ref={imageRef} onLoad={() => {if(!loaded) setLoaded(true)}} />
        </div>
    );
}

export default Image;