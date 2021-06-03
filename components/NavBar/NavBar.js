import React, {useEffect, useState} from 'react';
import navBarStyles from '../../styles/components/navBar.module.css';
import {Transition} from 'react-transition-group';
import Hamburger from '../Hamburger';
import SubNav from './SubNav';
import Link from 'next/link';
//Global Context
import {useGlobalContext} from '../../context/GlobalContext';

function NavBar(props) {
    const [oldWindowScroll, setOldWindowScroll] = useState();
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const {clickHamburger, windowScroll } = useGlobalContext();

    useEffect(() => {
        if (typeof window !== "undefined" ) {
            // browser code
            if(oldWindowScroll > windowScroll){
                let scroll = window.innerWidth < 601 ? 5000 : 700;
                if(windowScroll < scroll ){
                    setShouldAnimate(true);
                }
            }else{
                if(windowScroll > 0 ){
                    setShouldAnimate(false);
                }
            }
            setOldWindowScroll(windowScroll);
          }
    }, [windowScroll]);

    return (
        <>
        <Transition
        in={shouldAnimate}
        timeout={1000}
        >
        {state => (
            <section id={navBarStyles.container} style={state === "exiting" || state === "exited" ? {transform: "translateY(-100%)"} : 
            state === "entering" || state === "entered" ? {transform: "translateY(0)"} : null }>
            <div id={navBarStyles.mainNav}>
                <Hamburger />
                <Link href="/"><p>La Stalla At Stables</p></Link>
                <div></div>
            </div>
            <Transition
            in={clickHamburger}
            timeout={500}>
                {state => (
                    <SubNav state={state} />
                )}
            </Transition>
        </section>
        )}
        </Transition>
        </>
    );
}

export default NavBar;