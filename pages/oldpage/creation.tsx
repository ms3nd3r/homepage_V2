import type { NextPage } from 'next'
import Link from 'next/link'
//import styles from '../styles/oldpage.module.css'
//上のstylesを書くとcss適用

const Home: NextPage = () => {
  return (
    <div>
      {/* 最初のページ,ホームページの内容をどんどん記載してください */}
      <div>ここにホームページ</div>
      <Link  href="/test" legacyBehavior>
        ページ遷移テスト
        {/* リンク系の要素はこんな凡例で,importも忘れずに */}
      </Link>
    </div>  
  )
}

export default Home
