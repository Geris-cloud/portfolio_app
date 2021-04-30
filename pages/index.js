import Mainpage from '../components/mainpage'
import styles from '../styles/language.module.scss'

export default function Home() {
  return (
    <>

      <div className={styles.lang}>
        <p><span>en</span> / <span>pl</span></p>
      </div>
      <Mainpage></Mainpage>
    </>
  )
}