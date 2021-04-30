import styles from '../styles/wrapper.module.scss'

export default function Wrapper({ children, data }) {

  const wrapClassChange = () => {
    if (data) {
      return styles.pull
    } else {
      return ''
    }
  }

  return (
    <div className={`${styles.wrap} ${wrapClassChange()}`}>
      {children}
      <footer></footer>
    </div>
  )
}