import Head from 'next/head'
import WrapNav from '../../components/nav'
import useLocalStor from '../../components/local-storage'
import { Span, State, Main } from '../../components/styled-comp'
import styles from '../../styles/contact.module.scss'
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
        <title>Contact</title>
        <link rel="icon" href="/address-book.svg" />
      </Head>
      <State visible={animations} className={lanStyles.state}>
        <div className={lanStyles.lang}>
          <p><Span one lng={language} onClick={changeLangEn}>en</Span> / <Span two lng={language} onClick={changeLangPl}>pl</Span></p>
        </div>
        <WrapNav langFlag={language}>
          <Main visible={animations} className={styles.contact}>
            <form className={styles.send} action="mailto:dariuszochotny9@gmail.com" method="post">
              <div>
                <label for="name">{language ? 'Imię lub nazwa firmy' : 'Personal or company name'}</label><input placeholder={language ? 'Imię Nazwisko' : 'Name Surname'} type="text" name="name" size="30" maxlength="40"></input>
                <label for="email">E-mail</label><input placeholder={language ? 'przykład@adres.pl' : 'example@adress.com'} type="text" name="email" size="30" maxlength="40"></input>
              </div>
              <div>
                <label for="message">{language ? 'Twoja wiadomość' : 'Your message'}</label><textarea name="message" id="" cols="30" rows="10" maxlength="400"
                  wrap="hard"></textarea>
                <button type="submit">{language ? 'Wyślij' : 'Send'}</button>
              </div>
            </form>
            <div className={styles.icons}>
              <div className={styles.fb}>
                <p>Facebook</p><a href="https://www.facebook.com/darek.ochotny/"></a>
              </div>
              <div className={styles.li}>
                <p>Linkedin</p><a href="https://www.linkedin.com/in/dariusz-ochotny-0534651bb/"></a>
              </div>
            </div>
          </Main>
        </WrapNav>
      </State>
    </>
  )
}