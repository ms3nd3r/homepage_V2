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
                <li className={styles.menuLink}> <Link href="https://github.com/ms3nd3r">GitHub</Link></li>
                <li className={styles.menuLink}><Link href="https://github.com/ms3nd3r">Twitter</Link></li>
            </ul>
            <p>→→scroll→→</p>
        </header>
        <div className={styles.welcomePhoto}>
                <img src="/img/forCreation.png" alt="WelcomePhoto" />
        </div>
        <div className={styles.main}>
            <div className={styles.creation}>
                <p className={styles.creation_explain}>タイトルやファイル名をクリックすることで<br />該当の制作物に遷移することができます<br />◎ 物によってはありません</p>
                <h3>成果物</h3>
                    <div className={styles.creation_body}>
                        <p>
                            <Link href="https://github.com/ms3nd3r/jsapps">- JSApps</Link><br />
                            (<Link href="https://ms3nd3r.github.io/jsapps/escapeGame/timer/timer.html">脱出ゲームタイマー</Link>/<Link href="https://ms3nd3r.github.io/jsapps/mahjong-score/index.html">麻雀スコア計算ツール</Link>)
                        </p>
                        <p>
                            <Link href="https://github.com/ms3nd3r/idea_Storage">- idea_Storage</Link><br />
                            (PHP/共同開発)
                        </p>
                        <p>
                            <Link href="https://oguzemi2.sakura.ne.jp/Emotions_meter/">- 感情を可視化して日記を書きやすくするためのアプリケーション Emotions_meter</Link><br />
                            (PHP/Laravel)<br />
                            ◎ ミニマムなWebアプリとしてサービス公開中<br />
                            ◎ 2023年下半期アップデート版公開予定
                        </p>
                    </div>
                <h3>実績</h3>
                    <div className={styles.creation_body}>
                        <p>
                            <Link href="https://manabow.com/sl/result/21/">- 第21回日経STOCKリーグ アイデア賞(専門学校史上初)</Link><br />
                            <Link href="https://manabow.com/sl/result/21/pdf/21_10.pdf">#Follow_Me～Google Trends×AIで導くアフターコロナの社会を作る有望企業～<br />
                            ◎ こちらをクリックするとpdfが開きます</Link><br />
                        </p>
                        <p>
                            - ＩＳＣプログラミングコンテスト２０２１ グランプリ<br />
                            「ＡＩによる株式選定プログラム」
                        </p>
                        <p>
                            -  神情協「学生ＩＴコンテスト 2022」入賞<br />
                             「Emotions_meter」(実装ページは上記の成果物から)
                        </p>
                        <p>
                            -  学校法人岩崎学園 情報科学専門学校 卒業研究代表者発表会 優秀賞<br />
                            「謎解き×IoT」作問スタッフ
                        </p>
                    </div>
                    <p className={styles.creation_explain}>タイトルやファイル名をクリックすることで<br />該当の制作物に遷移することができます<br />◎ 物によってはありません</p>
            </div>
        </div>
        <footer className={styles.footer}>
          <p>ms3nd3r</p>
        </footer>
    </article>  
  )
  
}



export default Home
