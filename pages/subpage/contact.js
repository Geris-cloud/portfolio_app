import Head from 'next/head'
import { State } from '../../components/styled-comp'
import styles from '../../styles/contact.module.scss'
import React, { useState, useEffect } from 'react';

export default function Contact({ langFlag }) {
  const [animations, setAnimations] = useState()

  useEffect(() => {
    setAnimations(true)
  }, [])

  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/address-book.svg" />
      </Head>
      <State visible={animations} className={styles.contact}>
        <form className={styles.send} action="mailto:dariuszochotny9@gmail.com" method="post">
          <div>
            <label for="name">{langFlag ? 'Imię lub nazwa firmy' : 'Personal or company name'}</label><input placeholder={langFlag ? 'Imię Nazwisko' : 'Name Surname'} type="text" name="name" size="30" maxlength="40"></input>
            <label for="email">E-mail</label><input placeholder={langFlag ? 'przykład@adres.pl' : 'example@adress.com'} type="text" name="email" size="30" maxlength="40"></input>
          </div>
          <div>
            <label for="message">{langFlag ? 'Twoja wiadomość' : 'Your message'}</label><textarea name="message" id="" cols="30" rows="10" maxlength="400"
              wrap="hard"></textarea>
            <button type="submit">{langFlag ? 'Wyślij' : 'Send'}</button>
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
      </State>
    </>
  )
}