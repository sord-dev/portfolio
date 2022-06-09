import { Box, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import styles from "../styles/About.module.css";

function about() {
  return (
    <Box className={styles.main}>
      <Box className={styles.container}>
        <Heading>About me</Heading>
        <Spacer />
        <Text >Testing</Text>
      </Box>
    </Box>
  )
}

export default about