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
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default MainNav;
