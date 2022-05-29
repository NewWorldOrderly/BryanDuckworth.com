import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="padding-none bg-lines-dots md:bg-animal-collective bg-cover bg-fixed bg-no-repeat">
      <Head>
        <title>Bryan Duckworth - Perception is an illusion.</title>
        <meta
          name="description"
          content="Versatile problem solver with over 15 years of web development experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="align-center flex min-h-screen flex-1 flex-col justify-center py-16	">
        <h1 className="text-shadow-md m-0 text-center text-6xl text-surface">
          Perception is an illusion.
        </h1>

        <p className="text-shadow my-16 text-center text-2xl text-surface">
          <code className="text-shadow-none mb-4 inline-block bg-surface p-2 text-xl text-onSurface">
            NextJS
          </code>
          <br className="md:hidden" />
          <span className="mb-4 inline-block md:mx-4">{` </> `}</span>
          <br className="md:hidden" />
          <code className="text-shadow-none mb-4 inline-block bg-surface p-2 text-xl text-onSurface">
            React
          </code>
          <br className="md:hidden" />
          <span className="mb-4 inline-block md:mx-4">{` </> `}</span>
          <br className="md:hidden" />
          <code className="text-shadow-none mb-4 inline-block bg-surface p-2 text-xl text-onSurface">
            Node.js
          </code>
          <br className="md:hidden" />
          <span className="mb-4 inline-block md:mx-4">{` </> `}</span>
          <br className="md:hidden" />
          <code className="text-shadow-none mb-4 inline-block bg-surface p-2 text-xl text-onSurface">
            TailwindCSS
          </code>
          <br className="md:hidden" />
          <span className="mb-4 inline-block md:mx-4">{` </> `}</span>
          <br className="md:hidden" />
          <code className="text-shadow-none bg-surface p-2 text-xl text-onSurface">
            Git
          </code>
        </p>

        <div className="align-flex flex flex-wrap justify-center">
          <a
            href="https://github.com/NewWorldOrderly"
            className="m-4 max-w-sm border bg-surface p-6 text-left hover:border-onSurface-alt hover:text-onSurface"
          >
            <h2 className="text-xl font-bold">Github Account &rarr;</h2>
            <p>
              Various personal and professional projects I&#39;ve contributed
              to.
            </p>
          </a>

          <a
            href="https://ballersanonymo.us"
            className="m-4 max-w-sm border bg-surface p-6 text-left hover:border-onSurface-alt hover:text-onSurface"
          >
            <h2 className="text-xl font-bold">ballersanonymo.us &rarr;</h2>
            <p>A company focused on full service web development</p>
          </a>
        </div>
      </main>

      <footer className="align-center flex flex-1 justify-center border-t-2 border-onSurface bg-surface py-8">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="align-center flex grow justify-center"
        >
          Powered by{" "}
          <span className="ml-2 h-4">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
