import type { NextPage } from 'next'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
        <div>ページ遷移テストは成功です</div>
        <Link href="/">
            <a>戻る</a>
        </Link>
    </div>  
  )
}

export default Home
