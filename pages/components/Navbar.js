import { Link } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <nav className="nav">
    <ul>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/about">about me</Link>
      </li>
      <li>
        <Link href="/projects">projects</Link>
      </li>
      <li>
        <Link href="/contact">contact</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar