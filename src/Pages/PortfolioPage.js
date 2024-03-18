import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function PortfolioPage() {

  const [projects, setProjects] = useState([
    
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site avec commande en ligne",
      imageUrl: "./images/restaurant-japonais.jpg",
      githubUrl: "https://github.com",
      tools: "Site réalisé avec WordPress",
    },

    {
      title: "Fresh food",
      description: "Réalisation d'un site vitrine",
      imageUrl: "./images/fresh-food.jpg",
      githubUrl: "https://github.com",
      tools: "Site réalisé avec PHP et MySQL",
    },
    {
      title: "Espace bien-etre",
      description: "Réalisation d'un site vitrine pour un patricien de bien-etre",
      imageUrl: "./images/espace-bien-etre.jpg",
      githubUrl: "https://github.com",
      tools: "Site réalisé en HTML/CSS",
    },

  ]);

  return (
    <Container className="py-5 container-background" style={{ backgroundColor:'white'}}>
      <h1 className="text-center mb-4">PORTFOLIO</h1>
      <p className="text-center" style={{ borderBottom: '2px solid blue center', }}>Voici quelques-unes de mes réalisations</p>
      
      <Row className="justify-content-md-center">
        {projects.map((project, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text style={{fontSize: '14px'}}>{project.description}</Card.Text>
                <Button variant="outline-primary" style={{marginBottom: '10px'}}><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-center">Voir</a> </Button>
                <Card.Footer style={{fontSize:'11px'}}>{project.tools}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PortfolioPage;