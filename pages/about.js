import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";
import ParticleBackground from "./components/ParticleBackground";

function about() {
  return (
    <>
      <Head>
        <title>Sord-dev&apos;s Portfolio - About</title>
      </Head>

      <ParticleBackground className={styles.background} />
      <Box as="div" className={styles.main} mb={10}>

        <Box maxW="32rem">
          <Heading mb={4}>
          About me
          </Heading>
          <Text fontSize="xl">
          Hello, my name is Stefan and I love making things that live on the
            internet. I&apos;m a self taught web developer focused on front end
            work but for a passion and buring interest for the field as a whole.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default about;
