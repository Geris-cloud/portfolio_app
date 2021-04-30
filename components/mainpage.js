import Head from 'next/head'
import WrapNav from './nav'
import styles from '../styles/mainpage.module.scss'

export default function Mainpage({ langFlag }) {
    return (
        <>
            <Head>
                <title>Dariusz Ochotny</title>
                <link rel="icon" href="/home-solid.svg" />
            </Head>
            <WrapNav langFlag={langFlag}>
                <header className={styles.myname}>
                    <h1>Dariusz Ochotny</h1>
                    <p>{langFlag ? 'Jestem młodą osobą po studiach inżynierskich na kierunku Gospodarka Przestrzenna. Informatyką pasjonuję się od dawna. Programować uczę się od roku. Aktualnie szukam stażu lub pracy jako junior w sektorach IT - na chwilę obecną głównie web-development.' : 'I am a young person after engineering studies in the field of Spatial Development. I have been passionate about IT for a long time and I have been learning how to program for a year. I am currently looking for an internship or a job as a junior in IT sectors - currently mainly web-development.'}</p>
                    <p>{langFlag ? 'Na stronie znajdą Państwo proste menu składające się na technologie w których jestem zaznajomiony oraz moje portfolio prac niekomercyjnych - aktualizowane na bieżąco.' : 'On the website you will find a simple menu of technologies in which I am familiar and my portfolio of non-commercial works - updated on a regular basis.'}</p>
                    <p>Hobby:</p>
                    <p><i className="fas fa-gamepad" alt="gaming" title="gaming"></i><i className="fas fa-dumbbell" alt="gym"
                        title="gym"></i><i className="fas fa-laptop-code" alt="coding" title="coding"></i><i
                            className="fas fa-memory" alt="technology" title="technology"></i>
                    </p>
                    <p className={styles.photo}><span>{langFlag ? 'zmień zdjęcie' : 'change photo'}</span></p>
                    <div className={styles.photo}></div>
                </header>
            </WrapNav>
        </>
    )
}