import Head from 'next/head';
import useLocalStor from '../../components/local-storage';
import { Main } from '../../components/styled-comp';
import styles from '../../styles/technology.module.scss';
import React, { useState, useEffect } from 'react';

export default function Technologies({ langFlag }) {
  const [flag, setFlag] = useLocalStor()
  return (
    <>
      <Head>
        <title>Technologies</title>
        <link rel="icon" href="/tasks-solid.svg" />
      </Head>
      <Main className={styles.background}>
        {/* <div className={background}> */}
        <p className={styles.instruction}>{langFlag ? 'pokaż stopień zaawansowania' : 'show the degree of advancement'}</p>
        <main className={styles.bilboard}>
          <div id={styles.html} className={styles.icon}>
            <p>HTML</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id={styles.css} className={styles.icon}>
            <p>CSS</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id={styles.js} className={styles.icon}>
            <p>JavaScript</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.bootstrap} ${styles.icon}`}>
            <p>Bootstrap</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.scss} ${styles.icon}`}>
            <p>Sass</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.jquery} ${styles.icon}`}>
            <p>jQuery</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.github} ${styles.icon}`}>
            <p>GitHub</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.node} ${styles.icon}`}>
            <p>Node</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.express} ${styles.icon}`}>
            <p>Express</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.mongodb} ${styles.icon}`}>
            <p>MongoDB</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.react} ${styles.icon}`}>
            <p>React</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </main>
        {/* </div> */}
      </Main>
    </>
  )
}