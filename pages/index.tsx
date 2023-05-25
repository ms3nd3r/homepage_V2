import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
//上のstylesを書くとcss適用

const Home: NextPage = () => {
  return (
   <article className={styles.main}>
      <header className={styles.Header}>　　　　　</header>
      <div >
        <h1>☆☆☆Welcome to ms3nd3r page!!☆☆☆</h1>
      </div>
      <div>
        <h2>
          あなたは
            {/* <table border="0" cellspacing="0" cellpadding="0"><tr><td align="center"><a href="http://www.rays-counter.com/"><img src="http://www.rays-counter.com/d490_f6_022/6105e8800adb3/" alt="アクセスカウンター"></a></td></tr><tr /><td align="center"><img src="http://www.rays-counter.com/images/counter_01.gif" border="0"><img src="http://www.rays-counter.com/images/counter_02.gif" border="0"><img src="http://www.rays-counter.com/images/counter_03.gif" border="0"><img src="http://www.rays-counter.com/images/counter_04.gif" border="0" ><img src="http://www.rays-counter.com/images/counter_05.gif" border="0"></td></tr></table>人目の訪問者です！ */}
          <br />カウンター制作中...
          <br />人目の訪問者です！
        </h2> 
      </div>
      <div >
        <h3>Enter</h3>
          <div >
            <Link href="/Japanese">
              <a >About Me</a>
            </Link> 
            <Link  href="https://ms3nd3r.github.io/creation/">
              <a >創作ページ</a>
            </Link>
          </div>
        <p><strong>鋭意更新中！！</strong></p>
      </div>
      <div >
          <h3>UPDATE NOTE</h3>    
          <p>
              Version:2.0.2 2023/05/22 プロフィールを更新,リファクタリング開始<br />
              Version:2.0.1 2023/01/09 新年にあたってプロフィールを更新<br />
              Version:2.0.0 2022/09/12 ページをnext.js仕様にリニューアル →　今後レイアウトも全変更予定。<br />
              Version:1.0.2 2021/08/01 アクセスカウンタ微調整<br />
              Version:1.0.1 2021/03/29 新年度にあたってプロフィールを更新<br />
              Version:1.0.0 2020/11/17 全ページの体裁が整ったのでいったん完成版として公開。<br />
              Version:0.3.0 2020/11/14 自己紹介・英語版ページ完成<br />
              Version:0.2.0 2020/11/12 自己紹介・日本語版ページ完成<br />
              Version:0.1.1 2020/11/06 創作したページをリストアップして<a href="https://github.com/ms3nd3r/creation">別リポジトリ</a>にまとめた<br />
              Version:0.1.0 2020/07/18 indexページ更新完了<br />
              Version:0.0.3 2020/07/15 GitHubにアップロード<br />
              Version:0.0.2 2020/07/14 ページレイアウトを確定<br />
              Version:0.0.1 2020/07/13 indexファイル,CSSファイルを作成
          </p>
      </div>
      <footer >
          <p> 一昔前感を出したかった。反省はしていない。</p>
      </footer>
    </article>  
  )
}

export default Home
