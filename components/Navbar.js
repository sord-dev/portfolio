import { AiFillHome, AiFillPhone, AiFillProject } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { Link, IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconContext } from "react-icons";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav className="nav">
      <ul>
        <IconContext.Provider value={{size: 17.5}}>
          <li>
            <Tooltip label="Home">
              <Link href="/">
                <IconButton icon={<AiFillHome />} />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip label="About">
              <Link href="/about">
                <IconButton icon={<SiAboutdotme />} />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip label="Projects">
              <Link href="/projects">
                <IconButton icon={<AiFillProject />} />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip label="Contact">
              <Link href="/contact">
                <IconButton icon={<AiFillPhone />} />
              </Link>
            </Tooltip>
          </li>

          <li>
            <IconButton
              zIndex="100"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            ></IconButton>
          </li>
        </IconContext.Provider>
      </ul>
    </nav>
  );
}

export default Navbar;
