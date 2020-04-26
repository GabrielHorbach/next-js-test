import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! I'm Gabriel and this is my blog.</p>
        <p>Here you will find posts about technologies that I'm using or even learning at the moment as well as cool stuff about music and bodybuilding. Have a nice reading!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}