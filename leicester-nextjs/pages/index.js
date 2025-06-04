// pages/index.js
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moja Strona - Futbol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Moja Strona</div>
          <ul className={styles.navLinks}>
            <li><a href="#home">Start</a></li>
            <li><a href="#about">O nas</a></li>
            <li><a href="#services">Usługi</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.content}>
        <div className={styles.main}>
          <h2>Jamie Vardy opuszcza Leicester City po latach chwały</h2>
          <img src="/leicester.jpg" alt="Jamie Vardy" className={styles.mainImage} />
          <p>Po ponad dekadzie pełnej niezapomnianych chwil, Jamie Vardy żegna się z Leicester City. 37-letni napastnik...</p>
          <p>Vardy dołączył do Leicester w 2012 roku z trzecioligowego Fleetwood Town...</p>
          <p>Dla kibiców Leicester to bolesna wiadomość...</p>
        </div>
        <aside className={styles.sidebar}>
          <h3>Aktualności ze świata piłki nożnej</h3>
          <ul>
            <li><a href="#">Manchester City planuje wielkie transfery na lato.</a></li>
            <li><a href="#">Barcelona pokonała Real Madryt w El Clasico.</a></li>
            <li><a href="#">Robert Lewandowski zdobywa kolejną Złotą Piłkę?</a></li>
            <li><a href="#">Liverpool szykuje rewolucję kadrową przed nowym sezonem.</a></li>
          </ul>
        </aside>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Moja Strona. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </>
  );
}
