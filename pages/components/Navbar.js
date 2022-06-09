import {
  AtSignIcon,
  PhoneIcon,
  QuestionOutlineIcon,
  SunIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Link, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const { toggleColorMode } = useColorMode();
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/">
            <IconButton icon={<AtSignIcon />} />
          </Link>
        </li>
        <li>
          <Link href="/about">
            <IconButton icon={<QuestionOutlineIcon />} />
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <IconButton icon={<ViewIcon />} />
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <IconButton icon={<PhoneIcon />} />
          </Link>
        </li>

        <li>
          <IconButton onClick={toggleColorMode} icon={<SunIcon />}></IconButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
