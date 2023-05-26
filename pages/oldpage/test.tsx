import type { NextPage } from 'next'
import Link from 'next/link'
// import styles from '../styles/oldpage.module.css'

const Home: NextPage = () => {
  return (
    <div>
        <div>ページ遷移テストは成功です</div>
        <Link href="/" legacyBehavior>
            戻る
        </Link>
    </div>  
  )
}

export default Home
