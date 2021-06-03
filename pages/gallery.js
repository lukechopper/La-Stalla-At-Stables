import React, { useState, useEffect, useDebugValue } from 'react';
import galleryStyle from '../styles/gallery.module.css';
import Image from '../components/Image';
import ImageModal from '../components/ImageModal';
import {Transition} from 'react-transition-group';
import DocumentContainer from '../components/DocumentContainer';
//Global Context
import {useGlobalContext} from '../context/GlobalContext';

function gallery(props) {
    const images = [];
    const imagePrefix = "IMG-20210531-WA00";
    //Image Modal
    const [imageModal, setImageModal] = useState(null);
    const {showModal, setShowModal, windowWidth, hideScroll, openScroll, assignCurrentPage } = useGlobalContext();

    useEffect(() => {
        assignCurrentPage(3);
    }, []);

    const generateImages = (() => {
        for(let i = 0; i < 26; i++){
            let imageSrc = imagePrefix + (i < 10 ? "0" + i : i) + ".jpg";
            let imagePath = "../Assets/" + imageSrc;
            let type = 0;
            if(i === 0) type = 1;
            if(i === 10) type = 2;
            images.push({img: imagePath, type, index: i});
        }
    })();


    //Set image for image modal
    const setImage = (img) => {
        if(windowWidth > 600){
        setImageModal(img);
        setShowModal(true);
        hideScroll();
    }
    }

    const closeModal = () => {
        setShowModal(false);
        openScroll();
    }

    return (
        <DocumentContainer>
        <Transition
        in={showModal}
        timeout={300}
        unmountOnExit
        mountOnEnter>
            {state => (
                 <ImageModal imageModal={imageModal} images={images}
                closeModal={closeModal} state={state} />
            )}
        </Transition>
        <div id={galleryStyle.gallery}  >
            {images.map((img, index) => {
                let styles = [galleryStyle.imgContainer, 
                img.type === 1 || img.type === 2 ? galleryStyle.widerImage : null,
                img.type === 2 && galleryStyle.secondLarge ];

                return (
                <Image styles={styles} img={img} index={index} key={index}
                setImage={setImage} currentImage />
                )
            })}
        </div>
        </DocumentContainer>
    );
}

export default gallery;