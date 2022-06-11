import { Box, Button, Heading, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";
import ParticleBackground from "./components/ParticleBackground";

function about() {
  return (
    <Box className={styles.main}>
      <Head>
        <title>Sord-dev&apos;s Portfolio - About</title>
      </Head>

      <ParticleBackground />

      <Box as="div" className={styles.section} mb={10}>
        <Box className={styles.about_title} maxW="60rem">
          <Heading mb={4}  size="3xl">
            Stefan{" "}
            <Box color="purple.500" opacity={0.5} as="span">
              sord-dev
            </Box>{" "}
            Syrett
          </Heading>
          <Spacer />
          <Text fontSize={"xl"} className={styles.subtitle} p="1">
            Web Developer / Software Developer /{" "}
            <Box color="purple.400" as="span">
              Nerd
            </Box>
          </Text>
          <Text  fontSize="3xl" mb={1}>
            Hello, my name is Stefan and I love making things that live on the
            internet. I&apos;m a self taught web developer focused on front end
            work but has a passion and buring interest for the field as a whole.
          </Text>

          <Button as={'a'} href='#skills' size="lg" fontSize={"lg"} m={1} p={'3 5'} bgColor="purple.500">
            My Skills
          </Button>
        </Box>
      </Box>

      <Box as="div" className={styles.section} id='skills' mb={10}>
        
      </Box>
    </Box>
  );
}

export default about;
