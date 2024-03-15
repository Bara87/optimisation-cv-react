import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="homepage text-center">
      <BackgroundImage />
      <div className='py-5' style={{ marginBottom: '40px'}}>
        <Container className="py-5" style={{ backgroundColor: 'white' }}>
          <Row>
            <Col md={6}>
              <AboutMe />
            </Col>
            <Col md={6}>
              <Skills />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="background-image d-flex align-items-center justify-content-center">
      <div className="overlay"></div>
      <Container className="text-center" style={{ color: 'white' }}>
        <h1 style={{ color: 'white' }}>Bienvenue sur notre site</h1>
        <h2 style={{ color: 'white' }}>Découvrez ce que nous avons à offrir</h2>
        <Button variant="primary" style={{ marginTop: '20px' }}>En savoir plus</Button>
      </Container>
    </div>
  );
}

function AboutMe() {
  return (
    <div style={{ textAlign: 'left'}}>
      <h3 style={{ borderBottom: '2px solid blue', paddingBottom: '10px', marginBottom: '30px'}}>À propos</h3>
      <p>Je m'appelle Bara DIA, je suis actuellement une formation en ligne
en developpeur web et web mobile full stack, délivrée par le CEF(Centre Européenne de Formation). C'est dans le cadre de cette formation que je dois réaliser ce projet de PORTFOLIO ou vous aurez la possiblité mes chèrs visiteurs de pouvoir voir mes premières réalisations en tant que nouveau développeur. Cette formation complet et progressif, incluant les technologies prisées par les recruteurs, le tout débouchant sur le Titre Professionnel Développeur Web et Web Mobile(DWWM – RNCP37674) de niveau 5 (équivalent à un Bac+2). Je suis détenteur d’un DUT en Génie Mécanique et Productique mais, ces dernières années j’ai travaillé en hôtellerie au poste de réceptionniste. J’ai choisi de me spécialiser dans ce nouveau métier après avoir étudié et analysé l’évolution du marché du travail et les métiers d’avenirs. Ce qui m’a le plus attiré dans ce metier de développeur, c’est le fait qu’il soit un domaine évolutif, créatif avec toujours de nouveautés à découvrir. J’ai un esprit curieux et créatif, avec une bonne maitrise de la programmation, j’aurais toutes mes chances de faire mes preuves dans ce métier et de relever de nouveaux défis.</p>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "HTML", value: 90, color: '#61DAFB'},
    { name: "CSS", value: 80, color: '#00A3E0' },
    { name: "JAVASCRIPT", value: 70, color: '#F7DF1E'  },
    { name: "PHP", value: 60, color: '#8892BF' },
    { name: "REACT", value: 50, color: '#61DAFB' },
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <img src='./images/john-doe-about.jpg' alt="Votre photo" style={{ width: '100%'}} />
      <h4 style={{ marginTop: '10px'}}>Mes Compétences</h4>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <p>{skill.name}</p>
          <ProgressBar now={skill.value} label={`${skill.value}%`} variant={skill.color} />
        </div>
      ))}
    </div>
  );
}

export default HomePage; 