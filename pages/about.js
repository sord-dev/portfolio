import { Box, Heading, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";

function about() {
  return (
    <>
      <Head>
        <title>Sord-dev&apos;s Portfolio - About</title>
      </Head>
      <Box as="div" className={styles.main}>
        <Box as="div" className={styles.container}>
          <Heading>About me</Heading>
          <Text as="p" mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            maxime eum earum beatae, iusto voluptatum similique rem magnam
            quidem officiis facere ipsam quisquam ducimus et laborum modi
            dolorem aliquid fugit!
          </Text>

          <Heading>Skills</Heading>
          <Text as="p" mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            maxime eum earum beatae, iusto voluptatum similique rem magnam
            quidem officiis facere ipsam quisquam ducimus et laborum modi
            dolorem aliquid fugit!
          </Text>

          <Heading>Experience</Heading>
          <Text as="p" mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            maxime eum earum beatae, iusto voluptatum similique rem magnam
            quidem officiis facere ipsam quisquam ducimus et laborum modi
            dolorem aliquid fugit!
          </Text>

          <Heading>Education</Heading>
          <Text as="p" mb={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            maxime eum earum beatae, iusto voluptatum similique rem magnam
            quidem officiis facere ipsam quisquam ducimus et laborum modi
            dolorem aliquid fugit!
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default about;
