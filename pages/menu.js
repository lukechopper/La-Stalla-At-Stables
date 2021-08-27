import React, {useEffect, useState} from 'react';
import styles from '../styles/menu.module.css';
import {data} from '../data/menu';
import MenuSlice from '../components/Menu/MenuSlice';
//Global Context
import {useGlobalContext} from '../context/GlobalContext';

function menu(props) {

    const [singleCol, setSingleCol] = useState(false);

    useEffect(() => {
        setSingleCol(window.innerWidth < 1001);
        addEventListener('resize', () => {
            setSingleCol(window.innerWidth < 1001);
        });
    }, []);
    
    return (!singleCol ? (
            <div className={styles.mainContainer}>
            <div className={styles.column}>
                {data.map((menu, index) => {
                    if(index % 2 === 0){ //ODD
                        return <MenuSlice menu={menu} key={index} />
                    }
                })}
            </div>
            <div className={styles.column}>
                {data.map((menu, index) => {
                    if(index % 2 !== 0){ //EVEN
                        return <MenuSlice menu={menu} key={index} />
                    }
                })}
            </div>
        </div>
        ) : (
            <div className={styles.mainContainer}>
            <div className={styles.column}>
                {data.map((menu, index) => (
                    <MenuSlice menu={menu} key={index} />
                ))}
            </div>
        </div>
        ))
}

export default menu;