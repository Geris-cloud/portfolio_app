import '../styles/global.scss'
import WrapNav from '../components/nav';
import useLocalStor from '../components/local-storage';
import { Span, State } from '../components/styled-comp';
import styles from '../styles/language.module.scss';
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useLocalStor(true, 'langFlag');
  const [animations, setAnimations] = useState(false)

  const changeLangEn = () => {
    setLanguage(false, 'langFlag')
  }

  const changeLangPl = () => {
    setLanguage(true, 'langFlag')
  }

  useEffect(() => {
    setAnimations(true)
  }, [])

  return (
    <State visible={animations} className={styles.state} >
      <div className={styles.lang}>
        <p><Span one langFlag={language} onClick={changeLangEn}>en</Span> / <Span two langFlag={language} onClick={changeLangPl}>pl</Span></p>
      </div>
      <WrapNav langFlag={language}>
        <Component {...pageProps} langFlag={language} />
      </WrapNav>
    </State>
  )
}

export default MyApp