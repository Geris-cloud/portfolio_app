import { useState } from 'react'
import styles from '../styles/nav.module.scss'
import Wrapper from './wrapper'
import Link from 'next/link'

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
          <li><Link href="/"><a>{langFlag ? 'strona główna' : 'main page'}</a></Link></li>
          <li><Link href="/"><a>{langFlag ? 'technologie' : 'technology'}</a></Link></li>
          <li><Link href="/"><a>portfolio</a></Link></li>
          <li><Link href="/"><a>{langFlag ? 'kontakt' : 'contact'}</a></Link></li>
        </ul>
      </nav>
      <nav className={styles.hamburger}>
        <div className={classChange()}>
          <ul>
            <li><Link href="/"><a onClick={hamburgerPull}>{langFlag ? 'strona główna' : 'main page'}</a></Link></li>
            <li><Link href="/"><a onClick={hamburgerPull}>{langFlag ? 'technologie' : 'technology'}</a></Link></li>
            <li><Link href="/"><a onClick={hamburgerPull}>portfolio</a></Link></li>
            <li><Link href="/"><a onClick={hamburgerPull}>{langFlag ? 'kontakt' : 'contact'}</a></Link></li>
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