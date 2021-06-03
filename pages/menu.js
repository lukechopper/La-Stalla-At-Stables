import React, {useEffect, useState} from 'react';
import styles from '../styles/menu.module.css';
import {data} from '../data/menu';
import MenuSlice from '../components/Menu/MenuSlice';
//Global Context
import {useGlobalContext} from '../context/GlobalContext';

function menu(props) {

    const {assignCurrentPage} = useGlobalContext();
    const [menuItem, setMenuItem] = useState(0);
    const [transition, setTransition] = useState("NAN"); 

    useEffect(() => {
      assignCurrentPage(2);
    }, []);

    useEffect(() => {
        if(transition === "BEGIN"){
        setTimeout(() => {
            setTransition("BACK");
        }, 600);
    }else if(transition === "BACK"){
        setTimeout(() => {
            setTransition("NAN");
        }, 1000);
    }
    }, [transition]);

    const beginChange = (dir) => {
        if(dir === "RIGHT"){
            if(transition === "NAN" && data[menuItem + 1]){
                setTransition("BEGIN");
                setTimeout(() => {
                    setMenuItem(prev => prev+1);
                }, 600);
            }
        }else if(dir === "LEFT"){
            if(transition === "NAN" && data[menuItem - 1]){
                setTransition("BEGIN");
                setTimeout(() => {
                    setMenuItem(prev => prev-1);
                }, 600);
            }
        }
    }


    return (
        <>
        <div id={styles.arrowHolder}>
        <i className="fas fa-arrow-left" onClick={() => beginChange("LEFT")}
        id={styles.leftArrow}></i>
        <i className="fas fa-arrow-right" onClick={() => beginChange("RIGHT")}
        id={styles.rightArrow}></i>
        </div>
        <MenuSlice data={data} menuItem={menuItem } transition={transition} />
        </>
    );
}

export default menu;