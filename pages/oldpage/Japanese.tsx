import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/oldpage.module.css'
//上のstylesを書くとcss適用

const Home: NextPage = () => {
  return (
    <article className={styles.main}>
      <header className={styles.header}>　　　　　</header>
      <div className={styles.profile}>
        <h1>自己紹介</h1><br />
        <h2>名前</h2>
        村田創信<br />
        <h2>出生</h2>
        愛知県日進市<br />
        <h2>学籍</h2>
        情報科学専門学校/情報セキュリティ学科・ITスペシャリストコース<br />
        <h2>興味分野・記述経験のある言語</h2>
            <ul>
                <li>[Web開発]</li>
                  <ul>
                    <li>経験</li>
                      <ul>
                          <li>HTML/CSS</li>
                          <li>PHP</li>
                          <li>JavaScript</li>
                          <li>SQL</li>
                      </ul>
                    <li>学習中</li>
                        <ul>
                          <li>TypeScript</li>
                          <li>React</li>
                          <li>Next.js</li>
                          <li>Ruby</li>
                          <li>Laravel</li>
                        </ul>
                  </ul>
                <li>[ソフトウェア開発/スクレイピング/競技プログラミング]</li>
                    <ul>
                        <li>python</li>
                    </ul>
                <li>[CTF]</li>
                    <ul>
                        <li>Web</li>
                        <li>OSINT</li>
                    </ul>   
            </ul>
          <h2>趣味</h2>
          オンラインゲーム・ダーツ・ビリヤード・サイクリング・アニメ視聴・音楽鑑賞・将棋・イラスト作成・文字書き・読書etc...
          <h2>資格</h2>
          <ul>
              <li>全商簿記三級</li>
              <li>ITパスポート</li>
              <li>基本情報技術者</li>
              <li>情報処理検定三級</li>
              <li>ビジネス文書実務検定三級</li>
              <li>謎解き能力検定四級</li>
              <li>普通自動車運転免許</li>
          </ul>
        </div>
        <div className={styles.link}>
            <h2>リンク</h2>
            <ul className={styles.linkList}>
              <Link href="href=https://twitter.com/ms3nd3r" legacyBehavior>
                <li>Twitter[亀更新]</li>
              </Link>
              <Link href="https://github.com/ms3nd3r" legacyBehavior>
                <li>github[わりとそこそこ更新]</li>
              </Link>
              <Link href="https://ms3nd3r.hatenablog.com/" legacyBehavior>  
                <li>はてなブログ[不定期]</li>
              </Link>
              <Link href="https://atcoder.jp/users/ms3nd3r" legacyBehavior>
                <li>AtCoder[モチベーションの向くままに]</li>
              </Link>
            </ul>
        </div>
        <footer className={styles.footer}>
          <Link href="/">
            戻る
          </Link>
        </footer>
    </article>  
  )
}

export default Home
