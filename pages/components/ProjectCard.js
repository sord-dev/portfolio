import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Projects.module.css";

function ProjectCard({ project }) {
  return (
      <Link href={project.html_url}>
        <Box className={styles.card}>
          <Text as="h2">{project.full_name}</Text>
          <Text as="p">
            {project.description}
          </Text>

          <Text as='p'>{project.language}</Text>
          <Text as='p'>{`forks: ${project.forks_count} watchers: ${project.watchers} size: ${project.size > 1000 ? project.size / 1000 + 'Mb' : project.size + 'Kb'}`}</Text>
        </Box>
      </Link>
  
  );
}

export default ProjectCard;
