import Head from 'next/head'
import WrapNav from './nav'
// import Lan from '../components/lan'
import styles from '../styles/mainpage.module.scss'

export default function Mainpage() {
    return (
        <>
            <Head>
                <title>Dariusz Ochotny</title>
                <link rel="icon" href="/home-solid.svg" />
            </Head>
            <WrapNav>
                <header className={styles.myname}>
                    <h1>aaaaaaaaaaaaaaaaaa</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaa Lorem sdanvfh dsbna;abv vf;bsd; ab; ba;swv danf dasgn'</p>
                    <p>aaaaaaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaaaaaaaaa</p>
                    <p><i className="fas fa-gamepad" alt="gaming" title="gaming"></i><i className="fas fa-dumbbell" alt="gym"
                        title="gym"></i><i className="fas fa-laptop-code" alt="coding" title="coding"></i><i
                            className="fas fa-memory" alt="technology" title="technology"></i>
                    </p>
                    <p className={styles.photo}><span>aaaaaaaa</span></p>
                    <div className={styles.photo}></div>
                </header>
            </WrapNav>
        </>
    )
}

{/* <Head>
                <title>Dariusz Ochotny</title>
                <link rel="icon" href="/home-solid.svg" />
            </Head> */}
{/* <Nav></Nav> */ }
{/* <Lan></Lan> */ }