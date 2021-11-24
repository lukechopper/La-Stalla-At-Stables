import '../styles/globals.css';
import '../styles/hamburgers.css';
import '../styles/nprogress/nprogress.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, {useState} from 'react';
import Page from '../components/Page/Page';
import Router from 'next/router';
import NProgress from 'nprogress';
//Global Context
import {GlobalContext} from '../context/GlobalContext';

function MyApp({ Component, pageProps }) {

  const [load, setLoad] = useState(false);

  Router.events.on("routeChangeStart", url => {
    NProgress.start();
    setLoad(true);
  });

  Router.events.on("routeChangeComplete", url => {
    NProgress.done();
    setLoad(false);
  });

  return (<GlobalContext>
    <Page Component={Component} pageProps={pageProps} load={load} />
  </GlobalContext>)
}

export default MyApp
