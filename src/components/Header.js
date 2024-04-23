import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {

  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ width: '100%' }}>
      <Container>
        <Link to="/" className="navbar-brand my-logo" style={{ marginLeft: '20px' }}>
          John Doe
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-items-center" style={{ marginRight: '30px' }}>
            <Nav.Link as={Link} to="/" activeClassName="active" exact className="nav-link">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/services" activeClassName="active" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" activeClassName="active" className="nav-link">
              Réalisations
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" activeClassName="active" className="nav-link">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" activeClassName="active" className="nav-link">
              Me Contacter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;