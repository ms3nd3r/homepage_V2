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
                <li className={styles.menu} ><Link href="/aboutMe">About Me</Link></li>
                <li className={styles.menu} ><Link href="/creation">Creation</Link></li>
                <li className={styles.menuLink}><Link href="https://github.com/ms3nd3r">GitHub</Link></li>
                <li className={styles.menuLink}><Link href="https://twitter.com/ms3nd3r">Twitter</Link></li>
            </ul>
            <p>→→scroll→→</p>
        </header>
        <div className={styles.welcomePhoto}>
                <img src="/img/forIndex.jpg" alt="WelcomePhoto" />
                <p>Welcome to ms3nd3r&apos;s page</p>
        </div>
        <div className={styles.main}>
                <h1>ms3nd3rのホームページにようこそ。</h1>
            <div className={styles.guidance}>
                <h2>
                    *ただいまページのリニューアルを行っています。*<br />
                    もしよければ以前のページもご覧ください。
                </h2> 
                <div className={styles.link}>
                    <Link href="/oldpage"  legacyBehavior>
                        →Enter
                    </Link> 
                </div>
            </div>
            <div className={styles.UpdateNote}>
                <h2>Update Note</h2>
                <span> 
                    Version:2.1.0 2023/05/30 ホームページデザイン完全リニューアル<br />
                    Version:2.0.2 2023/05/22 プロフィールを更新,リファクタリング開始<br />
                    Version:2.0.1 2023/01/09 新年にあたってプロフィールを更新<br />
                    Version:2.0.0 2022/09/12 ページをnext.js仕様にリニューアル<br />
                    Version:1.0.2 2021/08/01 アクセスカウンタ微調整<br />
                    Version:1.0.1 2021/03/29 新年度にあたってプロフィールを更新<br />
                    Version:1.0.0 2020/11/17 全ページの体裁が整ったので公開。<br />
                    Version:0.3.0 2020/11/14 自己紹介・英語版ページ完成<br />
                    Version:0.2.0 2020/11/12 自己紹介・日本語版ページ完成<br />
                    Version:0.1.1 2020/11/06 創作したページをリストアップ<br />
                    Version:0.1.0 2020/07/18 indexページ更新完了<br />
                    Version:0.0.3 2020/07/15 GitHubにアップロード<br />
                    Version:0.0.2 2020/07/14 ページレイアウトを確定<br />
                    Version:0.0.1 2020/07/13 indexファイル,CSSファイルを作成
                </span>
            </div>
        </div>
        <footer className={styles.footer}>
            <p>
               ms3nd3r 2023<br />
               このサイトで使用している写真はすべて私が撮影したものです。
            </p>
        </footer>
    </article>  
  )
  
}



export default Home
