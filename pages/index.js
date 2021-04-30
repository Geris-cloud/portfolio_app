import Mainpage from '../components/mainpage'
import styles from '../styles/language.module.scss'
import { useState, useEffect } from 'react'

export default function Home() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('lanFlag' === null)) {
      localStorage.setItem('lanFlag', true)
    }
  }

  // const [language, setLanguage] = useState(typeof window !== 'undefined' ? localStorage.getItem('lanFlag') : true)

  const changeLangEn = () => {
    localStorage.setItem('lanFlag', false)
  }
  const changeLangPl = () => {
    localStorage.setItem('lanFlag', true)
  }

  const [language, setLanguage] = useState(typeof window !== 'undefined' ? localStorage.getItem('lanFlag') : true)

  // useEffect(() => {
  //   localStorage.setItem('lanFlag', language)
  // })

  // const [language, setLanguage] = useState(true)

  // const changeLangEn = () => {
  //   setLanguage(false)
  // }
  // const changeLangPl = () => {
  //   setLanguage(true)
  // }

  let changeEn = {};
  let changePl = {}
  const switchBtn = () => {
    if (language) {
      changeEn = {
        'background-color': 'transparent',
        'color': '#fff',
      }
      changePl = {
        'background-color': 'rgba(255, 255, 255, 0.8)',
        'color': '#000',
      }
    } else {
      changeEn = {
        'background-color': 'rgba(255, 255, 255, 0.8)',
        'color': '#000',
      }
      changePl = {
        'background-color': 'transparent',
        'color': '#fff',
      }
    }
  }
  switchBtn();

  return (
    <>
      <div className={styles.lang}>
        <p><span style={changeEn} onClick={changeLangEn}>en</span> / <span style={changePl} onClick={changeLangPl}>pl</span></p>
      </div>
      <Mainpage langFlag={language}></Mainpage>
    </>
  )
}