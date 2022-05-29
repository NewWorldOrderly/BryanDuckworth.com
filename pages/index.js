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

      <main className="py-16 flex flex-1 flex-col justify-center align-center min-h-screen	">
        <h1 className="m-0 text-6xl text-surface text-shadow-md text-center">
          Perception is an illusion.
        </h1>

        <p className="text-center text-shadow text-surface text-2xl my-16">
          <code className="bg-surface text-onSurface text-shadow-none p-2 text-xl inline-block mb-4">NextJS</code><br className="md:hidden"/>
          <span className="inline-block mb-4 md:mx-4">{` </> `}</span><br className="md:hidden"/>
          <code className="bg-surface text-onSurface text-shadow-none p-2 text-xl inline-block mb-4">React</code><br className="md:hidden"/>
          <span className="inline-block mb-4 md:mx-4">{` </> `}</span><br className="md:hidden"/>
          <code className="bg-surface text-onSurface text-shadow-none p-2 text-xl inline-block mb-4">Node.js</code><br className="md:hidden"/>
          <span className="inline-block mb-4 md:mx-4">{` </> `}</span><br className="md:hidden"/>
          <code className="bg-surface text-onSurface text-shadow-none p-2 text-xl inline-block mb-4">TailwindCSS</code><br className="md:hidden"/>
          <span className="inline-block mb-4 md:mx-4">{` </> `}</span><br className="md:hidden"/>
          <code className="bg-surface text-onSurface text-shadow-none p-2 text-xl">Git</code>
        </p>

        <div className="flex align-flex justify-center flex-wrap">
          <a href="https://github.com/NewWorldOrderly" className="m-4 p-6 text-left bg-surface border max-w-sm hover:text-onSurface hover:border-onSurface-alt">
            <h2>Github Account &rarr;</h2>
            <p>Various personal and professional projects I&#39;ve contributed to.</p>
          </a>

          <a href="https://ballersanonymo.us" className="m-4 p-6 text-left bg-surface border max-w-sm hover:text-onSurface hover:border-onSurface-alt">
            <h2>ballersanonymo.us &rarr;</h2>
            <p>A company focused on full service web development</p>
          </a>
        </div>
      </main>

      <footer className="flex flex-1 py-8 border-t-2 border-onSurface justify-center align-center bg-surface">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center align-center grow"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
