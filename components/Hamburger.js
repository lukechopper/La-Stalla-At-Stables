import React, {useEffect} from 'react';
//Global Context
import {useGlobalContext} from '../context/GlobalContext';

function Hamburger(props) {

    const {clickHamburger, setClickHamburger, hideScroll, openScroll} = useGlobalContext();

    useEffect(() => {
        if(clickHamburger === true){
            hideScroll();
        }else if(clickHamburger === false){
            openScroll();
        }
    }, [clickHamburger])

    let hamburgerState = ["hamburger", "hamburger--squeeze", clickHamburger ? "is-active" : null];

    return (
    <button className={hamburgerState.join(' ')} type="button" style={{marginLeft: "-15px"}}
    onClick={() => {setClickHamburger(prev => !prev)}}>
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>
    );
}

export default Hamburger;