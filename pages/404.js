import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function NotFount() {
  return (
    <Box display='flex' height='100vh' justifyContent='center' alignItems='center' flexDirection='column' gap='4'>
      <Heading textAlign='center'>
        Oops... Seems you&apos;ve stumbled beyond the universe.
      </Heading>
      <Text textAlign='center' fontSize='2xl'>Head back to one of the tabs using the navbar</Text>
    </Box>
  );
}

export default NotFount;
