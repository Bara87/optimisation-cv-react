import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import GithubProfile from "./Pages/GithubProfile";

function HomePage() {
  return (
    <div className="homepage text-center">
      <BackgroundImage />
      <div className='py-5' style={{backgroundColor: 'white'}} >
        <Container className="py-5 shadow" style={{ backgroundColor: 'white', marginBottom: '50px' }}>
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
      {/* Intégration du composant GithubProfile */}
      <div className="github-profile-container">
        <GithubProfile />
      </div>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="background-image position-relative d-flex align-items-center justify-content-center">
     
      <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
      
      {/* Contenu principal */}
      <Container className="text-center" style={{ color: 'white', position: 'relative', zIndex: 1 }}>
        <h1 style={{ color: 'white' }}>Bonjour, je suis John Doe</h1>
        <h2 style={{ color: 'white' }}>Développeur web full stack</h2>
        <Button variant="primary" style={{ marginTop: '20px' }}>En savoir plus</Button>
      </Container>
    </div>
  );
}

function AboutMe() {
  return (
    <div style={{ textAlign: 'left'}}>
      <h3 style={{ borderBottom: '2px solid blue', paddingBottom: '10px', marginBottom: '30px'}}>À propos</h3>
      <p>Je m'appelle John Doe, je suis actuellement une formation en ligne
         en developpeur web et web mobile full stack, délivrée par le CEF(Centre Européenne de Formation).
         C'est dans le cadre de cette formation que je dois réaliser ce site ou vous aurez la possiblité de 
         pouvoir voir mes premières réalisations en tant que nouveau développeur. Cette formation complet et progressif, 
         incluant les technologies prisées par les recruteurs, le tout débouchant sur le Titre Professionnel 
         Développeur Web et Web Mobile(DWWM – RNCP37674) de niveau 5 (équivalent à un Bac+2).    </p> </div>
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