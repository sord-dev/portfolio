import { Box, Heading, Link } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sord-dev&apos;s Portfolio</title>
        <meta name="description" content="Portfolio of sord-dev, otherwise known as Stefan" />
      </Head>

      <Box>
        <nav className={styles.nav}>
          <ul>
           <li><Link href="/">home</Link></li>
           <li><Link href="/about">about me</Link></li>
           <li><Link href="/projects">projects</Link></li>
           <li><Link href="/contact">contact</Link></li>
          </ul>
        </nav>
      </Box>

      <Box className={styles.main}>
      <Heading >
        Hey, the name&apos;s <Link color="teal.500" href='https://github.com/sord-dev'>Sord-dev</Link>
      </Heading>
      </Box>
    </div>
  )
}
