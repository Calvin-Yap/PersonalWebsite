import React from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col  } from 'reactstrap';

class Projects extends React.Component{
  render(){
        return (
      <div>

        <div className="boxabout">
          <h1 className="subLinks">Projects</h1>
          <hr className="hrstyleblack"/>
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="3">
                  <img className="projectImage"src="https://cdn2.f-cdn.com/contestentries/289535/1382510/562de67c5e372_thumb900.jpg" alt="mockup"/>
                  <div className="projectText"></div>
                </Col>
                <Col md="9">

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
