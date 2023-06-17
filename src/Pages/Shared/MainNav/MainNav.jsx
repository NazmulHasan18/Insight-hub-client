import { Container, Nav, Navbar } from "react-bootstrap";

// todo: some work is off for now
const MainNav = () => {
   return (
      <Navbar bg="dark" expand="lg" variant="dark">
         <Container>
            <Navbar.Brand href="/" className="fw-bold fs-3">
               InsightHub
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
               <Nav>
                  <Nav.Link
                     href="#blogs"
                     className="text-decoration-none me-3 text-white opacity-75 fw-semibold"
                  >
                     Blogs
                  </Nav.Link>
                  <Nav.Link
                     href="#news"
                     className="text-decoration-none me-3 text-white opacity-75 fw-semibold"
                  >
                     News Feed
                  </Nav.Link>
                  <Nav.Link
                     href="#events"
                     className="text-decoration-none me-3 text-white opacity-75 fw-semibold"
                  >
                     Events
                  </Nav.Link>
                  <Nav.Link
                     href="#jobs"
                     className="text-decoration-none me-3 text-white opacity-75 fw-semibold"
                  >
                     Jobs
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default MainNav;
