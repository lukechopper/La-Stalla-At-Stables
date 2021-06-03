import React, {useRef} from 'react';
import galleryStyle from '../styles/gallery.module.css';

function Image({img, styles, setImage}) {

    return (
        <div className={styles.join(' ')} onClick={() => {setImage(img)}}>
            <div className={galleryStyle.imgOverlay}></div>
            <img src={img.img}/>
        </div>
    );
}

export default Image;