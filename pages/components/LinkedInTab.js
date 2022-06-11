import { Box, Heading, Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

function LinkedInTab() {
  return (
    <Box p={5}>
      <Box mb={5} textAlign="center">
        <Heading size={"md"} pb="5">
          Check out my LinkedIn
        </Heading>

        <Tooltip label="To LinkedIn">
          <Link
            as={motion.a}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            href="https://www.linkedin.com/in/stefan-syrett-558380223/"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <AiFillLinkedin size={70} />

            <Text>Stefan Syrett</Text>
            <Text>London, England, United Kingdom</Text>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default LinkedInTab;
