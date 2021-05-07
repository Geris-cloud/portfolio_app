import styles from '../styles/wrapper.module.scss'

export function classChange(state, data) {
  if (state) {
    return data
  } else {
    return ''
  }
}

export default function Wrapper({ children, data }) {

  return (
    <div className={`${styles.wrap} ${classChange(data, styles.pull)}`}>
      {children}
      <footer></footer>
    </div>
  )
}