import React from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button  } from 'reactstrap';

class Projects extends React.Component{
  render(){
        return (
      <div>

        <div className="boxabout">
          <h1 className="subLinks">Projects</h1>
          <hr className="hrstyleblack"/>
          <div>
            <h1>How I started Coding</h1>
            <h1>Here are some of my projects bellow.</h1>
          </div>
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://cdn2.f-cdn.com/contestentries/289535/1382510/562de67c5e372_thumb900.jpg" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Personal Website</h1>
                  <p className="projectPara"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <Button className="btn-custom1">More</Button>{' '}
                <Button className="btn-custom1">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>       
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://cdn2.f-cdn.com/contestentries/289535/1382510/562de67c5e372_thumb900.jpg" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Tracktor</h1>
                  <p className="projectPara"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <Button className="btn-custom1">More</Button>{' '}
                <Button className="btn-custom1">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://cdn2.f-cdn.com/contestentries/289535/1382510/562de67c5e372_thumb900.jpg" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Grocery App</h1>
                  <p className="projectPara"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <Button className="btn-custom1">More</Button>{' '}
                <Button className="btn-custom1">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://cdn2.f-cdn.com/contestentries/289535/1382510/562de67c5e372_thumb900.jpg" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Interval Union</h1>
                  <p className="projectPara"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <Button className="btn-custom1">More</Button>{' '}
                <Button className="btn-custom1">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://cdn2.f-cdn.com/contestentries/289535/1382510/562de67c5e372_thumb900.jpg" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Pokedex Mobile App</h1>
                  <p className="projectPara"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <Button className="btn-custom1">More</Button>{' '}
                <Button className="btn-custom1">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://cdn2.f-cdn.com/contestentries/289535/1382510/562de67c5e372_thumb900.jpg" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Bash Fibonacci</h1>
                  <p className="projectPara"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <Button className="btn-custom1">More</Button>{' '}
                <Button className="btn-custom1">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
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

export default Projects;
