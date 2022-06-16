import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Link,
  List,
  ListItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  console.log(project)
  const date = new Date(project.created_at).toLocaleString().split(",")[0];

  return (
    <>
      <Box
        as={motion.div}
        className={styles.card}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          p=".5"
        >
          <Text as="h2">{project.name}</Text>
          <Link href={project.owner.html_url}>
            <Avatar src={project.owner.avatar_url} />
          </Link>
        </Box>

        <Divider m={2} />

        <List float="right" textAlign="right">
          <ListItem>{`language: ${project.language}`}</ListItem>
          <ListItem>{`created at: ${date}`}</ListItem>
          <ListItem>{`watchers: ${project.watchers}`}</ListItem>
          <ListItem>{`size: ${
            project.size > 1000
              ? project.size / 1000 + "Mb"
              : project.size + "Kb"
          }`}</ListItem>
        </List>

        <Text as="p" textAlign="left" p={1}>
          {project.description}
        </Text>

        <ButtonGroup width="100%" justifyContent="flex-end">
          <Tooltip label={`learn more about this project`}>
            <Button className={styles.button} as="a" href={project.html_url}>
              Code
            </Button>
          </Tooltip>
          {project.homepage && (
            <Tooltip label={`live hosted project`}>
            <Button className={styles.button} as="a" href={`https://${project.homepage}`}>
              Live Site
            </Button>
          </Tooltip>
          )}
        </ButtonGroup>
      </Box>
    </>
  );
}

export default ProjectCard;
