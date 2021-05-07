import Head from 'next/head';
import useLocalStor from '../../components/local-storage';
import { State } from '../../components/styled-comp';
import styles from '../../styles/mainpage.module.scss';
import React, { useState, useEffect } from 'react';

export default function Home({ langFlag }) {
  const [animations, setAnimations] = useState()

  useEffect(() => {
    setAnimations(true)
  }, [])

  return (
    <>
      <Head>
        <title>Dariusz Ochotny</title>
        <link rel="icon" href="/home-solid.svg" />
      </Head>
      <State visible={animations} className={styles.myname}>

      </State>
    </>
  )
}