import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="padding-none bg-cover bg-animal-collective bg-no-repeat bg-fixed">
      <Head>
        <title>Bryan Duckworth - Perception is an illusion.</title>
        <meta name="description" content="Versatile problem solver with over 15 years of web development experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Perception is an illusion.
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>NextJS</code>
          {` </> `}
          <code className={styles.code}>React</code>
          {` </> `}
          <code className={styles.code}>Node.js</code>
          {` </> `}
          <code className={styles.code}>Git</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/NewWorldOrderly" className={styles.card}>
            <h2>Github Account &rarr;</h2>
            <p>Various personal and professional projects I&#39;ve contributed to.</p>
          </a>

          <a href="https://ballersanonymo.us" className={styles.card}>
            <h2>ballersanonymo.us &rarr;</h2>
            <p>A company focused on full service web development</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
