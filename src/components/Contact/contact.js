
import React from 'react';
import './contact.css';
import Particles from 'react-particles-js';
import { Container, Row, Col } from 'reactstrap';

class Contact extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container fluid>
        <Row>
          <Col md="4">some text</Col>
          <Col className="test"  md="4">.col</Col>
          <Col md="4">.col</Col>

        </Row>
        </Container>
      </div>
        )
  }
}
export default Contact;
