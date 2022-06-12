import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
    <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
