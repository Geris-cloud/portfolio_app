import { useState } from 'react'
import styles from '../styles/nav.module.scss'
import Wrapper from '../components/wrapper'

export default function WrapNav({ children, langFlag }) {
  const [toggle, setToggle] = useState(false)

  const hamburgerPull = () => {
    setToggle(!toggle)
  }

  const classChange = () => {
    if (toggle) {
      return styles.pull
    } else {
      return ''
    }
  }

  return (
    <>
      <nav className={styles.pc}>
        <ul>
          <li><a href="#">{langFlag ? 'strona główna' : 'main page'}</a></li>
          <li><a href="technology/index.html">{langFlag ? 'technologie' : 'technology'}</a></li>
          <li><a href="portfolio/index.html">portfolio</a></li>
          <li><a href="contact/index.html">{langFlag ? 'kontakt' : 'contact'}</a></li>
        </ul>
      </nav>
      <nav className={styles.hamburger}>
        <div className={classChange()}>
          <ul>
            <li><a href="#" onClick={hamburgerPull}>{langFlag ? 'strona główna' : 'main page'}</a></li>
            <li><a href="technology/index.html" onClick={hamburgerPull}>{langFlag ? 'technologie' : 'technology'}</a></li>
            <li><a href="portfolio/index.html" onClick={hamburgerPull}>portfolio</a></li>
            <li><a href="contact/index.html" onClick={hamburgerPull}>{langFlag ? 'kontakt' : 'contact'}</a></li>
          </ul>
        </div>
        <i className="fas fa-bars" onClick={hamburgerPull}></i>
      </nav>
      <Wrapper data={toggle}>
        {children}
      </Wrapper>
    </>
  )
}