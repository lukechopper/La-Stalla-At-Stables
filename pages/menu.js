import React, {useEffect, useState} from 'react';
import styles from '../styles/menu.module.css';
import {data} from '../data/menu';
import MenuSlice from '../components/Menu/MenuSlice';
//Global Context
import {useGlobalContext} from '../context/GlobalContext';

function menu(props) {

    const [singleCol, setSingleCol] = useState(false);
    const {assignCurrentPage} = useGlobalContext();


    useEffect(() => {
        assignCurrentPage(2);
        setSingleCol(window.innerWidth < 1001);
        addEventListener('resize', () => {
            setSingleCol(window.innerWidth < 1001);
        });
    }, []);
    
    return (!singleCol ? (
            <div className={styles.mainContainer}>
            <div className={styles.leftCol}>
                {data.map((menu, index) => {
                    let isLeftCol = false;
                    if(menu.col === 'left') isLeftCol = true;
                    if(menu.col !== 'right' && index % 2 === 0) isLeftCol = true;
                    if(isLeftCol){ //EVEN
                        return <MenuSlice menu={menu} key={index} />
                    }
                })}
            </div>
            <div className={styles.rightCol}>
                {data.map((menu, index) => {
                    let isRightCol = false;
                    if(menu.col === 'right') isRightCol = true;
                    if(menu.col !== 'left' && index % 2 === 1) isRightCol = true;
                    if(isRightCol){ //ODD
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