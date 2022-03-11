import React from 'react';
import styles from '../../styles/menu.module.css';

function MenuSlice({ menu }) {
  return (
    <div className={styles.menuSliceContainer}>
      {!menu.time ? (
        <h1 className={styles.header}>{menu.title}</h1>
      ) : (
        <h1 className={styles.header}>
          {menu.title}
          <span className={styles.time}>{menu.time}</span>
        </h1>
      )}

      {menu.items.map((item, index) => (
        <div key={index}>
          {!item.specialText ? (
            <>
              <h3
                className={[
                  styles.menuHeader,
                  menu.items.length - 1 === index && !item.desc
                    ? styles.bottomMenuHeader
                    : null,
                ].join(' ')}
              >
                {item.title} {item.price && '-'} {item.price}
              </h3>
              <p className={styles.desc}>{item.desc}</p>
            </>
          ) : (
            <>
              <p className={styles.specialText}>{item.specialText}</p>
              {item.extraInfo && (
                <div dangerouslySetInnerHTML={{__html: item.extraInfo}}></div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuSlice;
