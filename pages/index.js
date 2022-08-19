import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../components/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Ajitesh and I am a Front End Developer!</p>
        <p>You can contact me on <a href="https://www.linkedin.com/in/ajitesh-chhatani-269522100/" target="_blank">LinkedIn </a></p>
      </section>
    </Layout>
  )
}
