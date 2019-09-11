import React from 'react';
import './contact.css';
import { Container, Row, Col } from 'reactstrap';

class Contact extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
    return (
      <div>
        <Container fluid>
        <Row>
          <Col md="8"><p className="text">meme</p></Col>
          <Col md="4">
  
               </Col>
        </Row>
        </Container>
      
      </div>
        )
  }
}
export default Contact;
