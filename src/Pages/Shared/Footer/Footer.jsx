import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer>
         <div className="bg-dark text-light">
            <Row>
               <Col className="py-3">
                  <Container>
                     <h1>Insight Hub</h1>
                     <Nav defaultActiveKey="/home" className="flex-column text-decoration-none px-5 py-3">
                        <Link className="text-light" href="/home">
                           Active
                        </Link>
                        <Link className="text-light" href="/">
                           Link
                        </Link>
                        <Link className="text-light" href="/">
                           Link
                        </Link>
                        <Link className="text-light" href="/">
                           Disabled
                        </Link>
                     </Nav>
                  </Container>
               </Col>
               <Col className="border-start py-3">
                  <Container>
                     <h2>Contact Us</h2>
                     <div className="px-5 py-3">
                        <p>Phone: {Math.round(Math.random(10) * 10 ** 10)}</p>
                        <p>Email: nazmulhasanshanto13@gmail.com</p>
                        <div className="d-flex gap-2">
                           <span>Address:</span>
                           <address>India</address>
                        </div>
                     </div>
                  </Container>
               </Col>
            </Row>
            <Row>
               <Col className="text-center bg-secondary p-3">
                  Copyright © 2023 - All right reserved by OST Placement Search Private Limited
               </Col>
            </Row>
         </div>
      </footer>
   );
};

export default Footer;
