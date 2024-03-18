
import React, { useState} from "react";
import { Container, Collapse, Card, Row, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function LegalPage() {

  const [editorInfoOpen, setEditorInfoOpen] = useState(false);
  const [hostInfoOpen, setHostInfoOpen] = useState(false);
  const [creditsInfoOpen, setCreditsInfoOpen] = useState(false);
  

 
  return (
    <Container className="py-5 container-background" style={{backgroundColor:'white'}}>
      <h1 className="mb-4 text-center">Mentions Légales</h1>
      
      <Row >
      <Card style={{padding:'0', margin: '0 auto', maxWidth: '1000px' }}>
                   
          <Card onClick={() => setEditorInfoOpen(!editorInfoOpen)} style={{ cursor: 'pointer', padding:'10px' }}  className="dropdown align-items-start" > 
              <p>Editeur du site</p>
              <div  className="dropdown-toggle" id="editorDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>
          </Card>
              <Collapse in={editorInfoOpen}>
                <div style={{marginTop:'10px', paddingLeft:'10px'}}>
                  <strong>John Doe</strong>
                  <p>40 Rue Laure Diebold</p>
                  <p>69009 Lyon, France</p>
                  <p>
                    <FaPhone style={{marginRight: '5px'}} />
                    <a href="tel:+33709004589">07 09 00 45 89</a></p>
                  <p>
                    <FaEnvelope style={{ marginRight: '5px' }} />
                    <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                </div>
              </Collapse>
           
          <Card onClick={() => setHostInfoOpen(!hostInfoOpen)} style={{ cursor: 'pointer', padding:'10px' }}  className="dropdown align-items-start"> 
              <p>Hébergeur du site</p>
              <div  className="dropdown-toggle" id="hostDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>
          </Card>
              <Collapse in={hostInfoOpen}>
                <div style={{marginTop:'10px', paddingLeft:'10px'}} >
                  <strong>Always Data</strong>
                  <p>91 rue Faubourd Saint Honoré</p>
                  <p>75008 Paris</p>
                  <p><a href="https://alwaysdata.com/" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
                </div>
              </Collapse>
           
          
          <Card  onClick={() => setCreditsInfoOpen(!creditsInfoOpen)} style={{ cursor: 'pointer', padding:'10px'}}  className="dropdown align-items-start"> 
              <p>Crédits</p>
              <div  className="dropdown-toggle" id="creditsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>
          </Card>
              <Collapse in={creditsInfoOpen}>
                <div style={{marginTop:'10px', paddingLeft:'10px'}} >
                  <strong>Crédits</strong>
                  <p>Site développé par John Doe, étudiant du CEF</p>
                  <p>Les images libre de droit sont issues du site <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
                </div>
              </Collapse>
        
      </Card>
        
      </Row>
    </Container>
  );
}
export default LegalPage;