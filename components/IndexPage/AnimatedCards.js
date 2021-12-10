import React, {useRef, useEffect} from 'react';
import DocumentContainer from '../DocumentContainer';
import indexStyles from '../../styles/IndexPage/AnimatedCards.module.css';
//Global Context
import {useGlobalContext} from '../../context/GlobalContext';

function AnimatedCards(props) {
  const {gsap} = useGlobalContext();

  const firstAnim = useRef(null);
  const secondAnim = useRef(null);

  useEffect(() => {
    gsap.fromTo(firstAnim.current,
      {opacity: 0,
      x: -50},
      {opacity: 2,
      x: 0, duration: window.innerWidth < 1000 ? 2 : 5,
      scrollTrigger: {
        trigger: firstAnim.current,
        start: "top center",
      }});
      gsap.fromTo(secondAnim.current,
        {opacity: 0,
        x: 50},
        {opacity: 2,
        x: 0, duration: window.innerWidth < 1000 ? 2 : 5,
        scrollTrigger: {
          trigger: secondAnim.current,
          start: "center bottom",
        }});
  }, []);

    return (
        <>
        <section style={{marginTop: "80px", opacity: "0"}}  ref={firstAnim}>
      <DocumentContainer>
        <div id={indexStyles.pictText1} className={indexStyles.pictText}>
          <section>
          <video autoPlay muted playsInline loop src="../Assets/VID-20211205-WA0032.mp4" />
          </section>
          <section>
            <p>always expect</p>
            <p>GREAT TASTE, GOOD TIMES</p>
            <p>Here at La Stalla we take pride in the quality of the ingredients used for each and every dish. If it’s not perfect and cooked just the way you ordered it, we won’t send it out. We guarantee the food delivered to your table is the best you could have ordered.</p>
          </section>
        </div>
      </DocumentContainer>
      </section>
      <section style={{marginTop: "80px", opacity: "0"}} ref={secondAnim} >
      <DocumentContainer>
        <div id={indexStyles.pictText2} className={indexStyles.pictText}>
          <section>
            <p>feel good</p>
            <p>Friendly staff, good food</p>
            <p>Our Restaurant makes customer satisfaction a priority. The environment is as warm and friendly, just like the staff. Repeated customers know that they are going to have a good night when they book a table with us.</p>
          </section>
          <section>
          <video autoPlay muted playsInline loop src="../Assets/VID-20211205-WA0031.mp4" />
          </section>
        </div>
      </DocumentContainer>
      </section>
        </>
    );
}

export default AnimatedCards;