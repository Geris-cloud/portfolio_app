import { useState } from 'react'
import styles from '../styles/nav.module.scss'
import { Div } from '../components/styled-comp'
import Wrapper, { classChange } from './wrapper'
import Link from 'next/link'

export default function WrapNav({ children, langFlag }) {
  const [toggle, setToggle] = useState(false)
  const [rotate, setRotate] = useState(false)

  const hamburgerPull = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <nav className={styles.pc} onMouseOver={() => { setRotate(true) }} onMouseLeave={() => { setRotate(false) }}>
        <ul>
          <li><Link href="/"><a>{langFlag ? 'strona główna' : 'main page'}</a></Link></li>
          <li><Link href="/subpage/technology"><a>{langFlag ? 'technologie' : 'technologies'}</a></Link></li>
          <li><Link href="/subpage/portfolio"><a>portfolio</a></Link></li>
          <li><Link href="/subpage/contact"><a>{langFlag ? 'kontakt' : 'contact'}</a></Link></li>
        </ul>
        <Div active={rotate}></Div>
      </nav>
      <nav className={styles.hamburger}>
        <div className={classChange(toggle, styles.pull)}>
          <ul>
            <li><Link href="/"><a onClick={hamburgerPull}>{langFlag ? 'strona główna' : 'main page'}</a></Link></li>
            <li><Link href="/subpage/technology"><a onClick={hamburgerPull}>{langFlag ? 'technologie' : 'technologies'}</a></Link></li>
            <li><Link href="/subpage/portfolio"><a onClick={hamburgerPull}>portfolio</a></Link></li>
            <li><Link href="/subpage/contact"><a onClick={hamburgerPull}>{langFlag ? 'kontakt' : 'contact'}</a></Link></li>
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