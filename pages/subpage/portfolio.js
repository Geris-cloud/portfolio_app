import Head from 'next/head';
import useLocalStor from '../../components/local-storage';
import { Main } from '../../components/styled-comp';
import styles from '../../styles/portfolio.module.scss';
import React, { useState, useEffect } from 'react';

export default function Home({ langFlag }) {

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/file-alt-solid.svg" />
      </Head>
      <Main className={styles.wrap}>
        <p className={styles.description}>{langFlag ? 'moje projekty' : 'my projects'}</p>
        <a className={styles.github} href="https://github.com/Geris-cloud"><i class="fab fa-github"></i></a>
        <div className={styles.portfolio}>
          <div>
            <div className={`${styles.photo} ${styles.one}`}></div>
            <div className={styles.text}>
              <p>Portfolio</p>
              <p></p>
              <a href="#">demo</a><a href="#">{langFlag ? 'kod' : 'code'}</a>
            </div>
          </div>
          <div>
            <div className={`${styles.photo} ${styles.two}`}></div>
            <div className={styles.text}>
              <p>{langFlag ? 'Aplikacja pogodowa' : 'Weather app'}</p>
              <p></p>
              <a href="https://geris-cloud.github.io/Workshop-home-page/">demo</a><a
                href="https://github.com/Geris-cloud/Workshop-home-page">{langFlag ? 'kod' : 'code'}</a>
            </div>
          </div>
          <div>
            <div className={`${styles.photo} ${styles.three}`}></div>
            <div className={styles.text}>
              <p>{langFlag ? 'Mój pierwszy projekt' : 'My first project'}</p>
              <p>HTML, CSS, JavaScript</p>
              <a href="#">demo</a><a href="#">{langFlag ? 'kod' : 'code'}</a>
            </div>
          </div>
          <div>
            <div className={`${styles.photo} ${styles.four}`}></div>
            <div className={styles.text}>
              <p>{langFlag ? 'Do dodania' : 'To be added'}</p>
              <p></p>
              <a href="#">demo</a><a href="#">{langFlag ? 'kod' : 'code'}</a>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}