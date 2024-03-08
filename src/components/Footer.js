import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-4">
      <Container className="footer-container">
        <Row>
          <Col md={3}>
            <div className="footer-address">
              <h5 >John Doe</h5>
              <p>Adresse : Place de la République</p>
              <p>Code postale : 75011</p>
              <p>Ville : Paris</p>
              <p>Téléphone : +337 09 00 45 89</p>
              <div>
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/johndoe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Pages</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/" className="black-link">Accueil</Link>
                </li>
                <li>
                  <Link to="/services" className="black-link">Services</Link>
                </li>
                <li>
                  <Link to="/contact" className="black-link">Contact</Link>
                </li>
                <li>
                  <Link to="/legal" className="black-link">Mentions legales</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Dernières réalisations</h5>
              <ul class="footer-list">
                <li>
                  <Link to="/portfolio" className="black-link">Portfolio</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Derniers articles</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/blog" className="black-link">Blog</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col style={{ textAlign: 'center' }}>
            <strong >
              &copy; 2024 John Doe. Tous droits réservés.
            </strong>
          </Col>
        </Row>
        <Row className="mt-2">
         <Col className="text-center">
           {showBackToTop && (
           <Button variant="info" 
           className="back-to-top" 
           onClick={scrollToTop}>
            Remonter en haut
           </Button>
           )}
         </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
