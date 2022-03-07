import React, { useState, useEffect, useMemo } from 'react';
import galleryStyle from '../styles/gallery.module.css';
import Image from '../components/Image';
import ImageModal from '../components/ImageModal';
import {Transition} from 'react-transition-group';
import DocumentContainer from '../components/DocumentContainer';
//Global Context
import {useGlobalContext} from '../context/GlobalContext';

function gallery(props) {
    const imagePrefix = "IMG-20211205-WA00";
    //Image Modal
    const [imageModal, setImageModal] = useState(null);
    const {showModal, setShowModal, windowWidth, hideScroll, openScroll, assignCurrentPage } = useGlobalContext();

    useEffect(() => {
        assignCurrentPage(3);
    }, []);

    const generateImages = () => {
        let tempImages = [];
        let realIndex = 0;
        for(let i = 1; i <= 27; i++){
            if(i === 8) continue;
            let imageSrc = imagePrefix + (i < 10 ? "0" + i : i) + ".jpg";
            let imagePath = "../Assets/" + imageSrc;
            let type = 0;
            if(i === 1 || i === 13 || i === 15) type = 1;
            if(i === 27) type = 2;
            tempImages.push({img: imagePath, type, index: realIndex});
            realIndex++;
        }
        return tempImages;
    };

    const images = useMemo(() => {
        return generateImages();
    }, []);


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
                img.type === 1 ? galleryStyle.widerImage : null];

                return (
                <Image styles={styles} img={img} index={index} key={index}
                setImage={setImage} />
                )
            })}
        </div>
        </DocumentContainer>
    );
}

export default gallery;