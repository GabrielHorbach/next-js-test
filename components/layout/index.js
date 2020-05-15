import Head from 'next/head'
import Link from 'next/link'

import styles from './index.module.css'
import utilStyles from '../../styles/utils.module.css'

const name = 'Gabriel Horbach'
export const siteTitle = 'Gabriel Horbach | Blog'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Oi! Sou o Gabriel e este é o meu blog. Sou desenvolvedor web/mobile, apaixonado por JavaScript, música e bodybuilding"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.imageWrapper}>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={styles.subtitle}>23, Desenvolvedor Web Full Stack, ama JavaScript, música e bodybuilding (:</h2>
          </>
        ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Voltar</a>
          </Link>
        </div>
      )}
    </div>
  )
}