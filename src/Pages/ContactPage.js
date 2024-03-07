import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import GooglemapsPage from "./GooglemapsPage";


function ContactPage() {

  // Coordonnées de latitude et de longitude
  const latitude = 48.8566; // Exemple: Paris
  const longitude = 2.3522; // Exemple: Paris

  // Utilisation de useState pour gérer l'état des champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter le formulaire de contact ici
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Mise à jour de l'état avec les valeurs des champs du formulaire
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      className="contact-page"
      style={{ position: 'relative',
        backgroundImage:
          "linear-gradient(rgba(0, 105, 255, 0.5), rgba(0, 105, 255, 0.5))",
      }}
    >
      
      <Container className="py-5" style={{marginTop:20}}>
      <img src="./images/contact-bg.jpg" alt="Logo" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />

        <h1 className="text-center text-white mb-4">Contactez-nous</h1>

        <Row className="align-items-center">
          {/* Colonne pour le formulaire de contact */}
          <Col md={6}>
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

              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form>
          </Col>

          {/* Colonne pour les coordonnées */}
          <Col md={6}>
            <div className="mt-5">
              <h3>Coordonnées</h3>
              <p>Prénom : John</p>
              <p>Nom : Doe</p>
              <p>Adresse : Place de la République, Paris</p>
              <p>Téléphone : +337 09 00 45 89</p>
              {/* Intégration de la carte Google Maps */}
              <GooglemapsPage lat={48.8566} lng={2.3522} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
