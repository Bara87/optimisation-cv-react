import React, { useState, useEffect } from 'react';
import { Container, Button, ProgressBar } from 'react-bootstrap';

function HomePage() {
  const [showAboutSection, setShowAboutSection] = useState(false);

  const handleClick = () => {
    setShowAboutSection(!showAboutSection);
  };

  return (
    <div className="homepage text-center">
      <BackgroundImage />
      <Button variant="primary" onClick={handleClick} className="mt-3">
        {showAboutSection ? 'Masquer' : 'En savoir plus'}
      </Button>
      {showAboutSection && <AboutSection />}
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="background-image">
      <div className="overlay"></div>
      <Container className="text-center ">
        <h1>Bienvenue sur notre site</h1>
        <h2>Découvrez ce que nous avons à offrir</h2>
      </Container>
    </div>
  );
}

function AboutSection() {
  const [profile, setProfile] = useState(null);
  const apiUrl = 'https://api.github.com/users/github-john-doe'; // URL du profil GitHub de John Doe

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Erreur lors de la récupération des données du profil GitHub:', error));
  }, []);

  return (
    <Container id="about" className="py-5">
      <h2>À propos de John Doe</h2>
      {profile ? (
        <ProfileInfo profile={profile} />
      ) : (
        <p>Chargement...</p>
      )}
    </Container>
  );
}

function ProfileInfo({ profile }) {
  // Définition des compétences avec leurs valeurs
  const skills = [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 75 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 85 },
  ];

  return (
    <div>
      <p>Nom d'utilisateur : {profile.login}</p>
      <p>Bio : {profile.bio}</p>
      <img src={profile.avatar_url} alt="Avatar de John Doe" style={{ width: '100px', borderRadius: '50%' }} />
      {/* Ajoutez les compétences sous forme de progress bars Bootstrap */}
      <h3>Compétences :</h3>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <p>{skill.name}</p>
          <ProgressBar now={skill.value} label={`${skill.value}%`} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
