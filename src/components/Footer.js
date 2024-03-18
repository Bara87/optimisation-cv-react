import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer  style={{paddingBottom:'15px'}}>
      <Container className="footer-container" style={{margin: '15px'}}>
        <Row>
          <Col md={3}>
            <div className="footer-address">
              <h5>John Doe</h5>
              <p>40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>Téléphone : +337 09 00 45 89</p>
              <div>
                <span style={{ marginRight: '10px' }}>
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </span>
                <span style={{ marginRight: '10px' }}>
                  <a
                    href="https://twitter.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/johndoe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </span>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Liens utiles</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/" className="black-link">Accueil</Link>
                </li>
                <li>
                  <Link to="/apropos" className="black-link">A propos</Link>
                </li>
                <li>
                  <Link to="/services" className="black-link">Services</Link>
                </li>
                <li>
                  <Link to="/contact" className="black-link">Me contacter</Link>
                </li>
                <li>
                  <Link to="/legal" className="black-link">Mentions legales</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Mes dernières réalisations</h5>
              <ul class="footer-list">
                <li>
                  <Link to="/portfolio" className="black-link">Fresh food</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="black-link">Restaurant Akira</Link>
                  <li>
                    <Link to="/portfolio" className="black-link">Espace bien-etre</Link>
                  </li>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Mes derniers articles</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/blog" className="black-link">Coder son site en HTML/CSS</Link>
                </li>
                <li>
                  <Link to="/blog" className="black-link">Vendre ses produits sur le web</Link>
                </li>
                <li>
                  <Link to="/blog" className="black-link">Se positionner sur Google</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        </Container>
       
          <Container className="text-center" md={12} fluid style={{ backgroundColor: '#1e1e1e', marginTop: '60px', padding: '15px'}} >
          <p style={{color: 'white'}} >
              &copy; 2024 John Doe. Tous droits réservés.
            </p>
          </Container>
   
    </footer>
  );
}

export default Footer;