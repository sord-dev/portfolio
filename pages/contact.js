import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
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

          <Box className={styles.card}>
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>

                <InputGroup>
                  <InputLeftElement />
                  <Input type="text" name="name" placeholder="Your Name" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>

                <InputGroup>
                  <InputLeftElement />
                  <Input type="email" name="email" placeholder="Your Email" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  resize="none"
                />
              </FormControl>

              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
                isFullWidth
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default contact;
