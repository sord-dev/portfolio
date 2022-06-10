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
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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

          <Tabs size="lg">
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
            </TabList>
            <TabPanels textAlign="center">
              <TabPanel></TabPanel>
              <TabPanel>2</TabPanel>
              <TabPanel>
                <ContactForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default contact;
