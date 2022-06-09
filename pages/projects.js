import { Box, Heading } from "@chakra-ui/react";
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
  console.log("data", data);

  return (
    <>
      <Head>
        <title>Sord-dev&apos;s Portfolio - Projects</title>
      </Head>
      <Box className={styles.main}>
        <Heading paddingBottom={10}>Projects</Heading>

        {data.map((project) => {
          return (
            <ProjectCard key={project.id} project={project}/>
          )
        })}
      </Box>
    </>
  );
}

export default projects;
