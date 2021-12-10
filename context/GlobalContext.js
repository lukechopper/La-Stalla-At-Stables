import React, {useContext, useState, useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const thisGlobalContext = React.createContext();

export function useGlobalContext(){
    return useContext(thisGlobalContext);
}

export function GlobalContext({children}) {

    if(typeof window !== "undefined"){
        gsap.registerPlugin(ScrollTrigger);
      }

    const [showModal, setShowModal] = useState(false);
    const [clickHamburger, setClickHamburger] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);
    const [windowScroll, setWindowScroll] = useState();
    //The current page that we are on
    const [currentPage, assignCurrentPage] = useState(null);

    const hideScroll = () => {
        if(typeof document !== "undefined"){
            document.body.style.height = "100vh";
            document.body.style.overflowY = "hidden";
        }
    }

    const openScroll = () => {
        if(typeof document !== "undefined"){
            document.body.style.height = "";
            document.body.style.overflowY = "";
        } 
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            // browser code
            setWindowWidth(window.innerWidth);
            addEventListener("resize", () => {
                setWindowWidth(window.innerWidth);
            });
            addEventListener("load", () => {
                setWindowScroll(window.scrollY);
            });
            addEventListener("scroll", () => {
                setWindowScroll(window.scrollY);
            });
            //Prevent overscroll
            addEventListener("touchstart", e => {
                if( e.scrollTop === 0 ) {
                    e.scrollTop += 1;
                } else if( e.scrollTop + e.offsetHeight >= e.scrollHeight ) {
                    e.scrollTop -= 1;
                }
            });
          }
    }, []);

    const value = {
        showModal,
        setShowModal,
        clickHamburger,
        setClickHamburger,
        windowWidth,
        setWindowWidth,
        windowScroll,
        setWindowScroll,
        hideScroll,
        openScroll,
        assignCurrentPage,
        currentPage,
        gsap
    }

    return (
        <>
        <thisGlobalContext.Provider value={value}>
            {children}
        </thisGlobalContext.Provider>
        </>
    );
}

