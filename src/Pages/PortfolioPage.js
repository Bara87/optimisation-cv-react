import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function PortfolioPage() {

  const [projects, setProjects] = useState([
    {
      title: "Projet 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor diam, euismod in enim ornare, efficitur pharetra lectus. Nulla at iaculis magna. Nullam sem orci, bibendum egestas diam non, varius mattis sem.",
      imageUrl: "./images/espace-bien-etre.jpg",
      githubUrl: "https://github.com",
    },
    {
      title: "Projet 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor diam, euismod in enim ornare, efficitur pharetra lectus. Nulla at iaculis magna. Nullam sem orci, bibendum egestas diam non, varius mattis sem.",
      imageUrl: "./images/fresh-food.jpg",
      githubUrl: "https://github.com",
    },
    {
      title: "Projet 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor diam, euismod in enim ornare, efficitur pharetra lectus. Nulla at iaculis magna. Nullam sem orci, bibendum egestas diam non, varius mattis sem.",
      imageUrl: "./images/restaurant-japonais.jpg",
      githubUrl: "https://github.com",
    },
  ]);

  return (
    <Container className="py-5 container-background">
      <h1 className="text-center mb-4">Nos Réalisations</h1>
      
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-center">Voir sur GitHub</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PortfolioPage;