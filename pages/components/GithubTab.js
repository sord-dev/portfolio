import {
  Avatar,
  Box,
  Heading,
  Link,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

function GithubTab({ data }) {
  return (
    <Box p={5}>
      <Heading mb={5} size={"md"}>
        Check me out on github
      </Heading>

      <Tooltip label='To Github'>
        <Link href={data.html_url}>
          <Avatar src={data.avatar_url} size="lg" mb={5} />
          <Text>{`@${data.login}`}</Text>
        </Link>
      </Tooltip>

      <Stack direction={"row"} p={1} m={1}>
        <Stat>
          <StatLabel>public repos</StatLabel>
          <StatNumber>{data.public_repos}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>followers</StatLabel>
          <StatNumber>{data.followers}</StatNumber>
        </Stat>
      </Stack>
    </Box>
  );
}

export default GithubTab;
