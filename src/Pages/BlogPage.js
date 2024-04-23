
import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const BlogPage = () => {
  const initialArticles = [
    {
      title: "Coder son site en HTML/CSS",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "Publié 22 mars 2022",
      image: "./images/coder.jpg",
      wordpressUrl: "https://wordpress.com/fr/",
    },
    {
      title: "Vendre ses produits sur le Web",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "Publié 20 mars 2022",
      image: "./images/croissance.jpg",
      wordpressUrl: "https://wordpress.com/fr/",
    },
    {
      title: "Se positionner sur Google",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "Publié 01 mars 2022",
      image: "./images/google.jpg",
      wordpressUrl: "https://wordpress.com/fr/",
    },
    {
      title: "Coder en responsive design",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "Publié 29 février 2022",
      image: "./images/screens.jpg",
      wordpressUrl: "https://wordpress.com/fr/",
    },
    {
      title: "Techniques de référencement",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "Publié 28 février 2022",
      image: "./images/seo.jpg",
      wordpressUrl: "https://wordpress.com/fr/",
    },
    {
      title: "Apprendre à coder",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "Publié 12 février 2022",
      image: "./images/technos.png",
      wordpressUrl: "https://wordpress.com/fr/",
    },
    
  ];

  const [articles] = useState(initialArticles.slice(0, 6));

  return (
    <Container className="py-5" style={{backgroundColor:'white'}} >
    <h1 className="text-center mb-4">Blog</h1>
    <p className="text-center">Retrouvez ici quelques artciles sur le développement web</p>
    <Row className="justify-content-md-center">
      {articles.map((article, index) => (
        <Col key={index} md={4} className="mb-3">
          <Card>
         
            {article.image && <img src={article.image} alt={`Image de ${article.title}`} className="img-fluid image-article" />}
            <Card.Title style={{marginLeft:'15px', marginTop:'15px'}}>{article.title}</Card.Title>
            <Card.Text style={{marginLeft:'15px'}}>{article.content}</Card.Text>
            <Button style={{ margin: '15px', width:'120px'}}><a href={article.wordpressUrl} target="_blank" rel="noopener noreferrer" className="text-center" style={{color:'white'}}>Lire la suite</a></Button>
            <Card.Footer className="text-muted">
              {article.date}
            </Card.Footer>
           
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default BlogPage;
