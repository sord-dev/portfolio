import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Projects.module.css";

function ProjectCard({ project }) {
  return (
    <Box className={styles.grid}>
      <Link href={project.html_url}>
        <Box className={styles.card}>
          <Text as="h2">{project.full_name}</Text>
          <Text as="p">
            {project.description}
          </Text>
        </Box>
      </Link>
    </Box>
  );
}

export default ProjectCard;
