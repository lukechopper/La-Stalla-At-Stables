import '../styles/globals.css';
import '../styles/hamburgers.css';
import '../styles/nprogress/nprogress.css';
import React from 'react';
import Page from '../components/Page/Page';
import Router from 'next/router';
import NProgress from 'nprogress';
//Global Context
import {GlobalContext} from '../context/GlobalContext';

function MyApp({ Component, pageProps }) {


  Router.events.on("routeChangeStart", url => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", url => {
    NProgress.done();
  });

  return (<GlobalContext>
    <Page Component={Component} pageProps={pageProps} />
  </GlobalContext>)
}

export default MyApp
