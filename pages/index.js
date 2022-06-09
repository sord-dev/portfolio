import { Box, Heading, Link } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

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

      <Box className={styles.main}>
        <Heading>
          Hey, the name&apos;s{" "}
          <Link color="teal.500" href="https://github.com/sord-dev">
            Sord-dev
          </Link>
        </Heading>
      </Box>
    </div>
  );
}
