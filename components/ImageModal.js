import React, {useState} from 'react';
import modalStyle from '../styles/components/imageModal.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function ImageModal({imageModal, closeModal, state, images}) {

    const [currentImage, setCurrentImage] = useState(imageModal.index);

    return (
        <div id={modalStyle.modalContainer}>
            <span onClick={() => {
                if(currentImage < 1) return;
                setCurrentImage(prev => --prev);
            }}>&#10132;</span>
            <img src={images[currentImage].img} 
            className={images[currentImage].type === 1 ? modalStyle.expand : images[currentImage].type === 2 
            ? modalStyle.contract : null}
            style={(state === "entering" ? {animation: "zoomIn 0.3s forwards"} : state === "entered" ? {transform: "scale(1, 1)"}
            : {transform: "scale(0, 0)"}) } />
            <span onClick={() => {
                if(currentImage >= images.length - 1) return;
                setCurrentImage(prev => ++prev);
            }}>&#10132;</span>
                        <FontAwesomeIcon icon={faTimes} id={modalStyle.closeX} onClick={closeModal} />
            <div style={{width: "100%", height: "100%", position: "absolute", zIndex: "-2"}} 
            onClick={ state !== "entering" ? closeModal : null}></div>
        </div>
    );
}

export default ImageModal;