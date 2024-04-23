import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faChartLine } from "@fortawesome/free-solid-svg-icons";

function ServicesPage() {
 
  const [services, setServices] = useState([
    {
      title: "UX DESIGN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna.",
      icon: faDesktop,
    },
    {
      title: "DEVELOPPEMENT WEB",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna.",
      icon: faCode,
    },
    {
      title: "REFERENCEMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna.",
      icon: faChartLine,
    },
    
  ]);


  const updatedServices = services.slice(0, 3);

  return (
    <Container fluid className="py-5 container-background" style={{ backgroundColor: 'white'}}>
      <h1 className="text-center mb-4">MON OFFRE DE SERVICES</h1>
      <p className="text-center">Voici les prestations sur lesquelles je peux intervenir</p>
      
      <Row className="justify-content-md-center" >
        {updatedServices.map((service, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card className="text-center">
              <Card.Body className="shadow">
                <FontAwesomeIcon icon={service.icon} size="3x" className="mb-4 text-primary icon-hover" /> 
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