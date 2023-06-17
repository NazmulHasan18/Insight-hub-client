import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive
                           ? "text-decoration-none me-3 text-white fw-semibold"
                           : " text-decoration-none me-3 text-white opacity-75 fw-semibold"
                     }
                  >
                     News Feed
                  </NavLink>
                  <NavLink
                     to="/events"
                     className={({ isActive }) =>
                        isActive
                           ? "text-decoration-none me-3 text-white fw-semibold"
                           : " text-decoration-none me-3 text-white opacity-75 fw-semibold"
                     }
                  >
                     Events{" "}
                  </NavLink>
                  <NavLink
                     to="/jobs"
                     className={({ isActive }) =>
                        isActive
                           ? "text-decoration-none me-3 text-white fw-semibold"
                           : " text-decoration-none me-3 text-white opacity-75 fw-semibold"
                     }
                  >
                     Jobs
                  </NavLink>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default MainNav;
