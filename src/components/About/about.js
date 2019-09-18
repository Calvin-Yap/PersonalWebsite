import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Collapsible from 'react-collapsible';
import { Container, Row, Col, UncontrolledCollapse, Button } from 'reactstrap';

class About extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>
   
        <div className="boxabout">
        <h1 className="subLinks">About Me</h1>
        <hr className="hrstyleblack"/>
        <Container fluid>
          <Row>
            <Col md="6">
              <h1 className="aboutlinks">
              <AnchorLink className="anchor1" offset="200"  href='#Education'>Education</AnchorLink>
              </h1>
            </Col>
            <Col md="6">
            <h1 className="aboutlinks"><AnchorLink  className="anchor1" offset="200"  href='#Experience'>Experience</AnchorLink>
            </h1>
            </Col> 
          </Row>
        </Container>
        <p className="aboutme">
        I am a third year Computer Science student studying at Ryerson University. In terms of my studies am currently interested in the fields of artificial intelligence and data sciences. In addition, Computer Graphics is another field that I am intrigued by as I love playing indie games so it would be a dream for me to create or help the development of one. I am always eager and excited to learn new things and create new projects that both further my learning and help others. In my spare time you can find me enjoying walks with my dog, practicing martial arts, playing Frisbee, and weightlifting. </p>        
          <h1>Interests</h1>
          <div className="centeralign">

        <Container fluid>
                  <Row className="spacer1">
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fab', 'dev']} size="2x"/>
                    <p className="iconsT"> &emsp;Web Dev</p>
                    <br/>
                    <p>On my spare time I like to create webpages.</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fas', 'medal']} size="2x"/>
                    <p className="iconsT"> &emsp;Sports</p>
                    <br/>
                    <p>I play many sports such as karate, frisbee, basketball, and volleyball.</p>                    
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'dumbbell']} size="2x"/>
                    <p className="iconsT"> &emsp;Fitness</p>
                    <br/>                
                    <p>Growing up as a very skinny kid, I try to change that with weightlifting.</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fab', 'java']} size="2x"/>
                    <p className="iconsT"> &emsp;Coding</p>
                    <br/>
                   <p>Fluent in many coding languages such as Java, C, Bash, etc.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                    <Button className="btn-custom1" id="webdev" style={{ marginBottom: '1rem' }}>
                      More
                    </Button>
                    <UncontrolledCollapse  toggler="#webdev">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>   
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="sports" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#sports">
                    <p>hi</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="fitness" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#fitness">
                    <p>hi</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="java" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#java">
                    <p>hi</p>
                    </UncontrolledCollapse>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF" icon={['fas', 'dog']} size="2x"/>
                    <p className="iconsT">&emsp; Pets</p>
                    <br/>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'headphones']} size="2x" />
                    <p className="iconsT">&emsp; Music</p>
                    <br/>     
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'gamepad']} size="2x" />
                    <p className="iconsT">&emsp; Gaming</p>
                    <br/>                  
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="iconsF"icon={['fas', 'plane']} size="2x" />
                    <p className="iconsT"> &emsp;Travel</p>
                    <br/>
                   
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                    <Button className="btn-custom1" id="pets" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#pets">
                    <p>hi</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="music" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#music">
                    <p>hi</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="gaming" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#gaming">
                    <p>hi</p>
                    </UncontrolledCollapse>
                    </Col>
                    <Col md="3">
                    <Button className="btn-custom1" id="travel" style={{ marginBottom: '1rem' }}>
                      more
                    </Button>
                    <UncontrolledCollapse toggler="#travel">
                    <p>hi</p>
                    </UncontrolledCollapse>
                    </Col>
                  </Row>
                </Container>
                </div>
       
        </div>
        
        <div className="javaBox">
          <Collapsible trigger="Education">
          <section id='Education'/>
          <img className="ryersonlogo" src="https://i.imgur.com/6dXhSzX.png"/>
          <p className="text">I am currently a second year student studying Computer Science at Ryerson University. Here I gain the proper experience for coding languages while learning about core concepts such as data structures, algorithms, networks, and operating systems. My interests lie towards the fields of software design, computer vision, and artifical intelligence.</p>
          </Collapsible>
        </div>
        <div className="javaBox">
        <Collapsible trigger="Experience">
          <section id='Experience'/>
          <p className="text">Currently, I am a freelance web desginer creating websites for fun and to assist friends and families trying to get a website template started.
          I am currently searching for an internship to further enhance my skills and expand my horizons in the web development field.
          </p>
          </Collapsible>
        </div>
       
        <footer>
        <a className="bottomlinks" href="https://github.com/Calvin-Yap"><FontAwesomeIcon className="fontawesome" icon={['fab', 'github']} size="lg" /></a>
        <a className="bottomlinks" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fab', 'linkedin']} size="lg" /></a>
        <a className="bottomlinks" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fas', 'file']} size="lg" /></a>
        <a className="bottomlinks" href="linkedman"><FontAwesomeIcon className="fontawesome"icon={['fas', 'envelope']} size="lg" /></a>
        <br/>
        <br/>
        <p>Made by Calvin Yap </p>
        <p>&copy; 2018 Calvin Yap</p>
        </footer>
    </div>
    )
  }
}
export default About;