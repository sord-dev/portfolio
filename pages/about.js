import { Box, Button, Heading, Link, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";
import ParticleBackground from "./components/ParticleBackground";
import { IoLogoJavascript } from "react-icons/io";
import { DiGit, DiReact } from "react-icons/di";
import { SiMaterialui, SiFirebase, SiChakraui } from "react-icons/si";
import { IconContext } from "react-icons";
import CustomPopover from "./components/Popover";

function about() {
  return (
    <Box className={styles.main}>
      <Head>
        <title>Sord-dev&apos;s Portfolio - About</title>
      </Head>

      <ParticleBackground />

      <Box as="div" className={styles.section} mb={10}>
        <Box className={styles.about_title} maxW="60rem">
          <Heading mb={4} size="3xl">
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
          <Text fontSize="3xl" mb={1}>
            Hello, my name is Stefan and I love making things that live on the
            internet. I&apos;m a self taught web developer focused on front end
            work but has a passion and buring interest for the field as a whole.
          </Text>

          <Button
            as={"a"}
            href="#skills"
            size="lg"
            fontSize={"lg"}
            m={1}
            p={"3 5"}
            bgColor="purple.500"
          >
            My Skills
          </Button>
        </Box>
      </Box>

      <Box as="div" className={styles.section} position='relative' display='flex' alignItems='center' justifyContent='center' id="skills" mb={10}>

      <Heading position='absolute' top='15px' left='15px'>
        Skills
      </Heading>
      <Box className={styles.grid}>

      
          <IconContext.Provider  value={{ size: 70 }}>
            <CustomPopover heading="Javascript" desc="Javascript is the main functionality language of the internet, and with the advent of NodeJS, has moved server side too.">
              <IoLogoJavascript />
            </CustomPopover>

            <CustomPopover heading="Git" desc="Git is a version control system that makes collaborative projects easy to maintain and expand on.">
              <DiGit />
            </CustomPopover>

            <CustomPopover heading="React" desc="test123">
              <DiReact />
            </CustomPopover>

            <CustomPopover heading="Firebase" desc="test123">
              <SiFirebase />
            </CustomPopover>

            <CustomPopover heading="Material UI" desc="test123">
              <SiMaterialui />
            </CustomPopover>

            <CustomPopover heading="Chakra UI" desc="test123">
              <SiChakraui />
            </CustomPopover>

            <CustomPopover heading="Framer Motion" desc="test123">
              <Text fontSize="2xl">framer-motion</Text>
            </CustomPopover>
          </IconContext.Provider>
          </Box>
      </Box>
    </Box>
  );
}

export default about;
