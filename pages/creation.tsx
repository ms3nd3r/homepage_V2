import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/newpage.module.css'
//上のstylesを書くとcss適用


const Home: NextPage = () => {

  return (
   <article className={styles.body}>
        <header className={styles.header}>
            <ul>
                <li className={styles.title}>ms3nd3r</li>
                <li className={styles.menu} >About Me-工事中-</li>
                <li className={styles.menu} >Creation-工事中-</li>
                <li className={styles.menuLink}> <Link href="https://github.com/ms3nd3r">GitHub</Link></li>
                <li className={styles.menuLink}><Link href="https://github.com/ms3nd3r">Twitter</Link></li>
            </ul>
            <p>→→scroll→→</p>
        </header>
        <div className={styles.welcomePhoto}>
                <img src="/img/forCreation.png" alt="WelcomePhoto" />
        </div>
        <div className={styles.main}>
            <div className={styles.guidance}>
                <h2>
                    申し訳ありませんが、ただいまページのリニューアルにつき工事中です。<br />
                    もしよければ以前のページをご覧ください。
                </h2> 
                <div className={styles.link}>
                    <Link href="/oldpage"  legacyBehavior>
                        →Enter
                    </Link> 
                </div>
            </div>
            <div className={styles.creation}>
                <h2>Creation</h2>
                <span> 
                    ここに制作物入れましょう
                </span>
            </div>
        </div>
        <footer className={styles.footer}>
          <p>ms3nd3r</p>
        </footer>
    </article>  
  )
  
}



export default Home
