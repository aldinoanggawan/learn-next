import styled from 'styled-components'

export const H1 = styled.h1`
  color: white;
  font-weight: 700;
`

export const P = styled.p`
  color: white;
`

export const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;

  &:focus,
  &:hover {
    color: lightblue;
  }
`

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`

export const Header = styled.header`
  padding: 1em 0;
  background-color: black;
`

export const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
`

export const NavItem = styled.li`
  & + & {
    margin-left: 1.5em;
  }
`

export const Section = styled.section`
  background: gray;
  min-height: 100vh;
  padding: 0.1em 0;
`
