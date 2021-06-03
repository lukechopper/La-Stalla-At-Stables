import React from 'react';
import navBarStyles from '../../styles/components/navBar.module.css';
import Link from 'next/link';
//Global Context
import {useGlobalContext} from '../../context/GlobalContext';

function SubNav({state}) {

    const {currentPage} = useGlobalContext();


    return (
        <>
            <div id={navBarStyles.subNav} style={state === "entering" || state === "entered" ? {transform: "scaleY(1)"} :
            {transform: "scaleY(0)"}}>
                <div className="paraDiv">
                <Link href="/"><p>Home</p></Link>
                <Link href="/menu"><p>Menu</p></Link>
                <Link href="/gallery"><p>Gallery</p></Link>
                <Link href="/locations"><p>Locations</p></Link>
                </div>
            </div>
            <style jsx>
                {`
                .paraDiv p:nth-child(${currentPage}){
                    color: black !important;
                }
                `}
            </style>
            </>
    );
}

export default SubNav;