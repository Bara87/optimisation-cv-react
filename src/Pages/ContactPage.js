import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import GooglemapsPage from "./GooglemapsPage";
import { FaPhone, FaMapMarkerAlt  } from 'react-icons/fa';


function ContactPage() {

 
  const latitude = 45.778460;
  const longitude = 4.799010; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-page " style={{ padding: '50px', position: 'relative'}}>
      <div className="overlay"></div>
      <Container className="py-5 container-background" style={{backgroundColor:'white'}}>
        <h1 className="text-center text-black mb-4">ME CONTACTER</h1>
        <p className="text-center">Pour me contacter en vue d'un entretien ou d'une future collabartion, merci de remplir le formulaire de contact.</p>
        <Row className="justify-content-md-center d-flex align-items-start">     
          <Col md={5} >
            <h3 style={{ borderBottom: '2px solid blue'}}>Formulaire de contact</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre nom"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Entrez votre numéro de téléphone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Sujet</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le sujet de votre message"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Entrez votre message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="text-center">   
              <Button variant="primary" type="submit" style={{marginTop:'20px'}}>
                Envoyer
              </Button>
              </div>
            </Form>
          </Col>

        
          <Col md={5} >
            <div >
              <h3 style={{ borderBottom: '2px solid blue'}}>Mes coordonnées</h3>
              <p>
                <FaMapMarkerAlt style={{ marginRight: '5px' }} />
                40 Rue Laure Diebold, Lyon</p>
              <p>
               <FaPhone style={{marginRight: '5px'}} />
                07 09 00 45 89</p>
              
              <GooglemapsPage lat={48.867202} lng={2.363613} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
