import React, {useState, useEffect, useRef} from 'react';
import modalStyle from '../styles/components/imageModal.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {useGlobalContext} from '../context/GlobalContext';

function ImageModal({imageModal, closeModal, state, images, imageEle}) {

    const [currentImage, setCurrentImage] = useState(imageModal.index);
    const {windowHeight, windowWidth} = useGlobalContext();
    const [sizeOnWidth, setSizeOnWidth] = useState(false);

    const calculateImageWidthAndHeight = (type) => {
        let width, height;
        if(type === 0){
            width = imageEle.current.naturalWidth - 300;
            height = windowWidth-40;
        }else if(type === 1){
            width = imageEle.current.naturalWidth;
            height = windowWidth-365;
        }else if(type === 2){
            width = imageEle.current.naturalWidth - 200;
            height = windowWidth+40;
        }else if(type === 3){
            width = imageEle.current.naturalWidth + 600;
            height = windowWidth - 200;
        }else if(type === 4){
            width = imageEle.current.naturalWidth - 400;
            height = windowWidth+100;
        }
        return [width, height];
    };

    useEffect(() => {
        const [imageWidth, imageHeight] = calculateImageWidthAndHeight(images[currentImage].type);
        if(windowWidth < imageWidth && windowHeight > imageHeight){
            setSizeOnWidth(true);
            return;
        }
        setSizeOnWidth(false);
    }, [windowHeight, windowWidth, currentImage]);

    return (
        <div id={modalStyle.modalContainer}>
            <span onClick={() => {
                if(currentImage < 1) return;
                setCurrentImage(prev => --prev);
            }}>&#10132;</span>
            <img src={images[currentImage].img} 
            className={[images[currentImage].type === 1 ? modalStyle.expand : null,
            sizeOnWidth ? modalStyle.sizeOnWidth : null].join(' ')}
            style={(state === "entering" ? {animation: "zoomIn 0.3s forwards"} : state === "entered" ? {transform: "scale(1, 1)"}
            : {transform: "scale(0, 0)"}) } ref={imageEle} />
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