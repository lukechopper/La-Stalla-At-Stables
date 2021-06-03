import React, {useRef, useEffect} from 'react';
import styles from '../../styles/menu.module.css';
//Global Context
import {useGlobalContext} from '../../context/GlobalContext';

function MenuSlice({menuItem, data, transition}) {
    const {gsap} = useGlobalContext();

    const container = useRef(null);

    if(transition === "BEGIN"){
        gsap.to(container.current, {opacity: 0, duration: 0.5});
    }else if(transition === "BACK"){
        gsap.to(container.current, {opacity: 1, duration: 1});
    }


    return (
        <div id={styles.menuContainer} ref={container}  >
        <h1>{data[menuItem].title}</h1>
        <p id={styles.headInfo}>Children's mains - £7.00. All mains are served with vegetables and potatoes.</p>
        <section id={styles.menuSect}>
            {data[menuItem].items.map((item, index) => (
                <div key={index}>
                <div className={styles.itemHead}>
                    {item.title} - {item.price}
                </div>
                <div className={styles.itemBody}>
                    {item.desc}
                </div>
                </div>
            ))}
        </section>
    </div>
    );
}

export default MenuSlice;