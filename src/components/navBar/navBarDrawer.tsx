import {Form, Button, FormControl, Nav, Navbar } from "react-bootstrap";

export function NavBarDrawer(props:any)
{
  return(
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#"> Intern management System </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#groups">Groups</Nav.Link>
      <Nav.Link href="#bib">Functional</Nav.Link>
      <Nav.Link href="#did">Functional</Nav.Link>
    </Nav>
  
  </Navbar>
  )
}