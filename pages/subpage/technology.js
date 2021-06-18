import Head from 'next/head';
import useLocalStor from '../../components/local-storage';
import { Main } from '../../components/styled-comp';
import styles from '../../styles/mainpage.module.scss';
import React, { useState, useEffect } from 'react';

export default function Home({ langFlag }) {

  return (
    <>
      <Head>
        <title>Dariusz Ochotny</title>
        <link rel="icon" href="/home-solid.svg" />
      </Head>
      <Main className={styles.myname}>

      </Main>
    </>
  )
}