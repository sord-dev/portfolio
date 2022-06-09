import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./components/ProjectCard";

const defaultEndpoint = "https://api.github.com/users/sord-dev/repos";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

function projects({ data }) {
  return (
    <>
      <Head>
        <title>Sord-dev&apos;s Portfolio - Projects</title>
      </Head>
      <Box className={styles.main}>
        <Heading>Projects</Heading>
        <Text as="p" className={styles.description}>
          All of my projects (sourced from github)
        </Text>

        <Box className={styles.grid}>
          {data.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </Box>
      </Box>
    </>
  );
}

export default projects;
