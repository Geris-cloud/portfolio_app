import Head from 'next/head'
import WrapNav from '../../components/nav'
import useLocalStor from '../../components/local-storage'
import { Span, State, Main } from '../../components/styled-comp'
import styles from '../../styles/mainpage.module.scss'
import lanStyles from '../../styles/language.module.scss'
import React, { useState, useEffect } from 'react'

export default function Home() {

  const [language, setLanguage] = useLocalStor(true, 'langFlag');
  const [animations, setAnimations] = useState()

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
    <>
      <Head>
        <title>Dariusz Ochotny</title>
        <link rel="icon" href="/home-solid.svg" />
      </Head>
      <State visible={animations} className={lanStyles.state}>
        <div className={lanStyles.lang}>
          <p><Span one lng={language} onClick={changeLangEn}>en</Span> / <Span two lng={language} onClick={changeLangPl}>pl</Span></p>
        </div>
        <WrapNav langFlag={language}>
          <Main visible={animations} className={styles.myname}>
            <h1>Dariusz Ochotny</h1>
            <p>{language ? 'Jestem młodą osobą po studiach inżynierskich na kierunku Gospodarka Przestrzenna. Informatyką pasjonuję się od dawna. Programować uczę się od roku. Aktualnie szukam stażu lub pracy jako junior w sektorach IT - na chwilę obecną głównie web-development.' : 'I am a young person after engineering studies in the field of Spatial Development. I have been passionate about IT for a long time and I have been learning how to program for a year. I am currently looking for an internship or a job as a junior in IT sectors - currently mainly web-development.'}</p>
            <p>{language ? 'Na stronie znajdą Państwo proste menu składające się na technologie w których jestem zaznajomiony oraz moje portfolio prac niekomercyjnych - aktualizowane na bieżąco.' : 'On the website you will find a simple menu of technologies in which I am familiar and my portfolio of non-commercial works - updated on a regular basis.'}</p>
            <p>Hobby:</p>
            <p><i className="fas fa-gamepad" alt="gaming" title="gaming"></i><i className="fas fa-dumbbell" alt="gym"
              title="gym"></i><i className="fas fa-laptop-code" alt="coding" title="coding"></i><i
                className="fas fa-memory" alt="technology" title="technology"></i>
            </p>
            <p className={styles.photo}><span>{language ? 'zmień zdjęcie' : 'change photo'}</span></p>
            <div className={styles.photo}></div>
          </Main>
        </WrapNav>
      </State>
    </>
  )
}