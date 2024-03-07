import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function ServicesPage() {
  // Utilisation de useState pour gérer l'état des services
  const [services, setServices] = useState([
    {
      title: "Service 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacinia vehicula mi quis efficitur.",
    },
    {
      title: "Service 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacinia vehicula mi quis efficitur.",
    },
    {
      title: "Service 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacinia vehicula mi quis efficitur.",
    },
    {
      title: "Service 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacinia vehicula mi quis efficitur.",
    },
    {
      title: "Service 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacinia vehicula mi quis efficitur.",
    },
    {
      title: "Service 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacinia vehicula mi quis efficitur.",
    },
  ]);

  return (
    <Container className="py-5 container-background">
      <h1 className="text-center mb-4">Nos Services</h1>
      
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesPage;
