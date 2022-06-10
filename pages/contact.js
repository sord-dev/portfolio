import {
  Box,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import styles from "../styles/Contact.module.css";

function contact() {

  return (
    <>
      <Head>
        <title>Sord-dev&apos;s Portfolio - Contact</title>
      </Head>
      <Box className={styles.main}>
        <Box className={styles.container}>
          <Heading textAlign='center' as="h1" mb="5">
            Get in touch
          </Heading>

          
        </Box>
      </Box>
    </>
  );
}

export default contact;
