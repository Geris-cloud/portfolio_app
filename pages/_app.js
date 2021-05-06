import '../styles/global.scss'
import useLocalStor from '../components/local-storage';
import { Span, State, Main } from '../components/styled-comp';
import styles from '../styles/mainpage.module.scss';
import lanStyles from '../styles/language.module.scss';
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return (

    <Component {...pageProps} />

  )
}

export default MyApp
