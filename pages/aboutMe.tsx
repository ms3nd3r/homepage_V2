import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/newpage.module.css'
//上のstylesを書くとcss適用


const Home: NextPage = () => {

  return (
   <article className={styles.body}>
        <header className={styles.header}>
            <ul>
                <li className={styles.title}><Link href="/">ms3nd3r</Link></li>
                <li className={styles.menu} ><Link href="/aboutMe">About Me</Link></li>
                <li className={styles.menu} ><Link href="/creation">Creation</Link></li>
                <li className={styles.menuLink}><Link href="https://github.com/ms3nd3r">GitHub</Link></li>
                <li className={styles.menuLink}><Link href="https://twitter.com/ms3nd3r">Twitter</Link></li>
            </ul>
            <p>→→scroll→→</p>
        </header>
        <div className={styles.welcomePhoto}>
                <img src="/img/forAboutMe.png" alt="WelcomePhoto" />
                <p>About Me</p>
        </div>  
        <div className={styles.main}>
            <div className={styles.aboutMe}>
                <h3>自己紹介</h3>
                <p>
                    名前<br />
                    ・村田創信<br />
                    出生<br />
                    ・愛知県日進市<br />
                    学籍<br />
                    ・情報科学専門学校/情報セキュリティ学科・ITスペシャリストコース
                </p>
                <h3>
                    興味分野・記述経験のある言語
                </h3>   
                <p>
                    [Web開発]<br />
                    ##経験<br />
                    - HTML/CSS<br />
                    - PHP<br />
                    - JavaScript<br />
                    - SQL<br />
                    ##学習中<br />
                    - TypeScript<br />
                    - React<br />
                    - Next.js<br />
                    - Ruby<br />
                    - Laravel<br />
                    [ソフトウェア開発/スクレイピング/競技プログラミング]<br />
                    - python<br />
                    [CTF]<br />
                    - Web<br />
                    - OSINT<br />
                </p>
                <h3>趣味</h3>
                <p>
                    - オンラインゲーム<br />
                    - ダーツ<br />
                    - ビリヤード<br />
                    - サイクリング<br />
                    - アニメ視聴<br />
                    - 音楽鑑賞<br />
                    - 将棋<br />
                    - イラスト作成<br />
                    - 文字書き<br />
                    - 読書<br />
                    etc...
                </p>
                <h3>資格</h3>
                <p>
                    ^全商簿記三級<br />
                    ^ITパスポート<br />
                    ^基本情報技術者<br />
                    ^情報処理検定三級<br />
                    ^ビジネス文書実務検定三級<br />
                    ^謎解き能力検定四級<br />
                    ^普通自動車運転免許<br />
                </p>
                <h3>LINK</h3>
                <p>
                    ◉<Link href="https://twitter.com/ms3nd3r">Twitter</Link>[亀更新]<br />
                    ◉<Link href="https://github.com/ms3nd3r">github</Link>[わりとそこそこ更新]<br />
                    ◉<Link href="https://ms3nd3r.hatenablog.com/">はてなブログ</Link>[不定期]<br />
                    ◉<Link href="https://atcoder.jp/users/ms3nd3r">AtCoder</Link>[モチベーションの向くままに]<br />
                </p>
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
