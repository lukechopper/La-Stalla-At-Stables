import React, {useRef} from 'react';
import styles from '../../styles/menu.module.css';
//Global Context
import {useGlobalContext} from '../../context/GlobalContext';

function MenuSlice({menu}) {

    return (
        <div className={styles.menuSliceContainer}>
            <h1 className={styles.header}>{menu.title}</h1>
            {menu.items.map((item, index) => (
                <div key={index}>
                <h3 className={styles.menuHeader}>{item.title} {item.title && '-'} {item.price}</h3>
                <p className={styles.desc}>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default MenuSlice;