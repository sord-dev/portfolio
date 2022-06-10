import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import ContactForm from "./components/ContactForm";

function contact() {
  return (
    <>
      <Head>
        <title>Sord-dev&apos;s Portfolio - Contact</title>
      </Head>
      <Box className={styles.main}>
        <Box className={styles.container}>
          <Heading textAlign="center" as="h1" mb="5">
            Get in touch
          </Heading>

          <Tabs width='300px' height='500px' align='center' size="lg">
            <TabList>
              <Tab>
                <AiFillGithub scale={2} />
              </Tab>
              <Tab>
                <AiFillLinkedin scale={2} />
              </Tab>
              <Tab>
                <CgMail />
              </Tab>
              <Tab>
                <AiFillTwitterCircle scale={2} />
              </Tab>
            </TabList>
            <TabPanels textAlign="center">

              <TabPanel>
              Github
              </TabPanel>

              <TabPanel>
              LinkedIn
              </TabPanel>

              <TabPanel>
                <ContactForm />
              </TabPanel>

              <TabPanel>
                Twitter
              </TabPanel>

            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default contact;
