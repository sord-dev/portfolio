import { Box, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "../components/AnimatedSphere";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sord-dev&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio of sord-dev, otherwise known as Stefan"
        />
      </Head>

      <Box className={styles.main}>
        <Heading
          as={motion.span}
          className={styles.title}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hey, the name&apos;s{" "}
          <Link color="purple.400" href="https://github.com/sord-dev">
            Sord-dev
          </Link>
        </Heading>

        <Text
          className={styles.description}
          as={motion.p}
          m={20}
          p={0}
          initial={{ opacity: 0, y: 200 }}
          animate={{ y: -50, opacity: 1 }}
          fontSize="16"
        >
          I&apos;m a React developer from London, UK
        </Text>

        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={2} />
          <AnimatedSphere />
        </Canvas>
      </Box>
    </div>
  );
}
