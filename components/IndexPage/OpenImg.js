import React from 'react';
import Link from 'next/link';
import indexStyles from '../../styles/IndexPage/OpenImg.module.css';
import DocumentContainer from '../DocumentContainer';

function OpenImg(props) {
    return (
        <div id={indexStyles.openImg}>
        <DocumentContainer>
        <div id={indexStyles.openContainer}>
          <h1>Your local Italian</h1>
          <p>Join us for your next meal. </p>
          <Link href="/menu"><div id={indexStyles.openBtn}>See Menu</div></Link>
          </div>
          </DocumentContainer>
          <div style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%",
        backgroundColor: "#222b34", opacity: "0.6", zIndex: "0"}}></div>
        </div>
    );
}

export default OpenImg;