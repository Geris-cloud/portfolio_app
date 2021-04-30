import { useState } from 'react'
import styles from '../styles/nav.module.scss'
import Wrapper from '../components/wrapper'

export default function WrapNav({ children }) {
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
          <li><a href="#">aaaaa</a></li>
          <li><a href="technology/index.html">aaaaa</a></li>
          <li><a href="portfolio/index.html">aaaa</a></li>
          <li><a href="contact/index.html">aaaaaaaa</a></li>
        </ul>
      </nav>
      <nav className={styles.hamburger}>
        <div className={classChange()}>
          <ul>
            <li><a href="#" onClick={hamburgerPull}>aaaaaaa</a></li>
            <li><a href="technology/index.html" onClick={hamburgerPull}>aaaaaa</a></li>
            <li><a href="portfolio/index.html" onClick={hamburgerPull}>aaaaaaaa</a></li>
            <li><a href="contact/index.html" onClick={hamburgerPull}>aaaaaaaa</a></li>
          </ul>
        </div>
        <i className="fas fa-bars" onClick={hamburgerPull}></i>
      </nav>
      <Wrapper data={toggle}>
        {children}
      </Wrapper>
      {/* <div className={`${styles.wrap} ${wrapClassChange()}`}>
        {children}
        <footer></footer>
      </div> */}
    </>
  )
}