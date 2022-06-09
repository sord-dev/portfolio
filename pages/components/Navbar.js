import {
  AtSignIcon,
  MoonIcon,
  PhoneIcon,
  QuestionOutlineIcon,
  SunIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Link, IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const { colorMode,toggleColorMode } = useColorMode();

  return (
    <nav className="nav">
      <ul>
        <li>
        <Tooltip label='Home'>
          <Link href="/">
            <IconButton icon={<AtSignIcon />} />
          </Link>
        </Tooltip>
        </li>
        <li>
        <Tooltip label='About'>
          <Link href="/about">
            <IconButton icon={<QuestionOutlineIcon />} />
          </Link>
        </Tooltip>
        </li>
        <li>
        <Tooltip label='Projects'>
          <Link href="/projects">
            <IconButton icon={<ViewIcon />} />
          </Link>
        </Tooltip>
        </li>
        <li>
        <Tooltip label='Contact'>
          <Link href="/contact">
            <IconButton icon={<PhoneIcon />} />
          </Link>
        </Tooltip>
        </li>

        <li>
          <IconButton onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }></IconButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
