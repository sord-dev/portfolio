import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import ContactForm from "./components/ContactForm";
import GithubTab from "./components/GithubTab";
import LinkedInTab from "./components/LinkedInTab";
import TwitterTab from "./components/TwitterTab";

const defaultEndpoint = "https://api.github.com/users/sord-dev";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

function contact({ data }) {
  return (
    <>
      <Head>
        <title>Sord-dev&apos;s Portfolio - Contact</title>
      </Head>
      <Box className={styles.main}>
        <Box className={styles.container}>
          <Heading textAlign="center" as="h1" mb="2em">
            Get in touch
          </Heading>

          <Tabs width="300px" height="500px" align="center" size="lg">
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
                <GithubTab data={data} />
              </TabPanel>

              <TabPanel>
                <LinkedInTab />
              </TabPanel>

              <TabPanel>
                <ContactForm />
              </TabPanel>

              <TabPanel>
                <TwitterTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default contact;
