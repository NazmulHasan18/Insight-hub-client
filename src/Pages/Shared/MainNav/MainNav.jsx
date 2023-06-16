import { Container, Nav, Navbar } from "react-bootstrap";

// todo: some work is off for now
const MainNav = () => {
   return (
      <Navbar bg="dark" expand="lg" variant="dark">
         <Container>
            <Navbar.Brand href="#home" className="fw-bold fs-3">
               InsightHub
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
               <Nav>
                  <Nav.Link href="/">News Feed</Nav.Link>
                  <Nav.Link href="#">Events </Nav.Link>
                  <Nav.Link href="#">Jobs </Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default MainNav;
