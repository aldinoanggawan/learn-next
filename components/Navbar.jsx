import Link from 'next/link'
import React from 'react'

import { A, Container, Header, Nav, NavItem } from '../styles/content'

const Navbar = () => (
  <Header>
    <Container>
      <Nav>
        <NavItem>
          <Link href='/'>
            <A> Home </A>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/hello'>
            <A> Hello </A>
          </Link>
        </NavItem>
      </Nav>
    </Container>
  </Header>
)

export default Navbar
