import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
      {showButton && (
        <Button color="purple.400" onClick={scrollToTop} className="btt">
          <ArrowUpIcon />
        </Button>
      )}
    </>
  );
}

export default Layout;
