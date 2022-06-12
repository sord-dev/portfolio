import { Box, Heading, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Timeline } from "react-twitter-widgets";

function TwitterTab() {
  return (
    <Box p={5} width="100%">
      <Heading mb={5} size={"md"}>
        Check me out on{" "}
        <Tooltip label="to twitter">
          <Link color="purple.300" href="https://twitter.com/sord_dev">
            twitter
          </Link>
        </Tooltip>
      </Heading>

      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "sord_dev",
        }}
        options={{
          height: "450",
          width: "450",
          theme: "dark",
        }}
      />
    </Box>
  );
}

export default TwitterTab;
