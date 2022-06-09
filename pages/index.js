import { Box, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion"
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sord-dev&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio of sord-dev, otherwise known as Stefan"
        />
      </Head>
      <ParticleBackground />

      <Box className={styles.main}>
        <Heading as={motion.span}
        className={styles.title}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}>
          Hey, the name&apos;s{" "}
          <Link color="purple.400" href="https://github.com/sord-dev">
            Sord-dev
          </Link>
        </Heading>

        <Text
        className={styles.description}
        as={motion.p}
        mt={20} 
        initial={{opacity: 0, y: 200 }}
        animate={{y: -50, opacity: 1}}
        fontSize='16'
        >I&apos;m a React developer from London, UK</Text>
      </Box>
    </div>
  );
}
