import {Form, Button, FormControl, Nav, Navbar } from "react-bootstrap";

export function NavBarDrawer(props:any)
{
  return(
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#">Wut</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#groups">Groups</Nav.Link>
      <Nav.Link href="#interns">Interns</Nav.Link>
      <Nav.Link href="#lections">Lections</Nav.Link>
    </Nav>
  
  </Navbar>
  )
}