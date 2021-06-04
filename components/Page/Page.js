import React, {useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import {Transition} from 'react-transition-group';
import Footer from '../../components/Footer';
import Head from 'next/head';
//Global Context
import {useGlobalContext} from '../../context/GlobalContext';

function Page({ Component, pageProps, load }) {

    const {clickHamburger, setClickHamburger} = useGlobalContext();

    useEffect(() => {
        if(load){
            setClickHamburger(false);
        }
    }, [load])

    return (
        <>
        <Head>
        {/*Lato Font*/}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/> 
        {/*Coustard Font*/}
        <link href="https://fonts.googleapis.com/css2?family=Coustard:wght@400;900&display=swap" rel="stylesheet" /> 
        {/*PT Serif*/}
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        {/*Font Awesome*/}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link> 
        {/*Favicon*/}
        <link rel="shortcut icon" href="../favicon/favicon.ico"/>

        </Head>
        <NavBar />
        <Component {...pageProps} />
        {/*Overlay that appears when we click on nav bar drop down*/}
        <Transition
        in={clickHamburger}
        timeout={300}
        mountOnEnter
        unmountOnExit
        >
        {state => (
            <div id="grayOverlay" style={state === "entering" ? {animation: "fadeIn 0.3s forwards" } :
            state === "entered" ?  {opacity: "0.5" } :  {opacity: "0"}}
            onClick={() => {setClickHamburger(false)}}></div>
        )}
        </Transition>
        <Footer />
        </>
    );
}

export default Page;