import { Avatar, Box, Button, ButtonGroup, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Projects.module.css";

function ProjectCard({ project }) {
  console.log(project)
  return (
        <Box className={styles.card}>

        <Box display='flex' justifyContent='space-between' alignItems='center' p='.5'>
        <Text as="h2">{project.name}</Text>
        <Link href={project.owner.html_url}> 
          <Avatar src={project.owner.avatar_url}/>
        </Link>
        </Box>
          
          <Text as="p" p={2}>
            {project.description}
          </Text>

          <Text as='p'>{project.language}</Text>
          <Text as='p'>{`forks: ${project.forks_count} watchers: ${project.watchers} size: ${project.size > 1000 ? project.size / 1000 + 'Mb' : project.size + 'Kb'}`}</Text>

          <ButtonGroup>
            <Button className={styles.button} as='a' href={project.html_url}>Code</Button>
          </ButtonGroup>
        </Box>
  
  );
}

export default ProjectCard;
