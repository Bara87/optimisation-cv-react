import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const BlogPage = () => {
  const initialArticles = [
    {
      title: "Titre de l'article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus",
      date: "1er Janvier 2024",
      author: "John Doe",
      image: "./images/coder.jpg",
    },
    {
      title: "Titre de l'article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus",
      date: "1er Janvier 2024",
      author: "John Doe",
      image: "./images/croissance.jpg",
    },
    {
      title: "Titre de l'article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus",
      date: "1er Janvier 2024",
      author: "John Doe",
      image: "./images/google.jpg",
    },
    {
      title: "Titre de l'article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus",
      date: "1er Janvier 2024",
      author: "John Doe",
      image: "./images/screens.jpg",
    },
    {
      title: "Titre de l'article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus",
      date: "1er Janvier 2024",
      author: "John Doe",
      image: "./images/seo.jpg",
    },
    {
      title: "Titre de l'article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi auctor, fermentum arcu et, aliquet magna. Proin ultricies sit amet ipsum sed posuere. Donec vitae leo est. Suspendisse non eros eu nibh mollis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus",
      date: "1er Janvier 2024",
      author: "John Doe",
      image: "./images/technos.png",
    },
    // Ajoutez d'autres articles ici
  ];

  const [articles] = useState(initialArticles.slice(0, 6));

  return (
    <Container className="py-5 container-background" >
    <h1 className="text-center mb-4">Blog</h1>
    <Row>
      {articles.map((article, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card>
          <Card.Body>
  <Card.Title>{article.title}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">
    {article.date}
  </Card.Subtitle>
  {article.image && <img src={article.image} alt={`Image de ${article.title}`} className="img-fluid image-article mb-3" />}
  <Card.Text>{article.content}</Card.Text>
  <Card.Footer className="text-muted">
    Auteur : {article.author}
  </Card.Footer>
</Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default BlogPage;
