import React from 'react';
import './projects.css';
import { Container, Row, Col, Button  } from 'reactstrap';
import Footer from '../Footer/footer'

class Projects extends React.Component{
  render(){
        return (
      <div>

        <div className="boxabout">
          <h1 className="subLinks">Projects</h1>
          <hr className="hrstyleblack"/>
          <div>
          {/*  <h1 className="subabouthead" >How I started Coding</h1>*/}
            <h1 className="centerHeading">Here are some of my projects bellow.</h1>
          </div>
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://i.imgur.com/gvuWpbc.png" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Personal Website</h1>
                  <h6>January 2019 - Present</h6>
                  <p className="projectPara"> A responsive web portfolio, that showcases more about myself and previous projects.   </p>
                  <ul>
                    <li>Developed Using ReactJS and hosted using Google Firebase. </li>
                    <li>Utilized ReactJS’ <strong>JSX syntax extension</strong>, <strong>routing</strong>, and <strong>state management</strong> to optimize the construction and user interface.</li>
                  </ul>
                {/*<Button className="btn-custom1">More</Button>{' '}*/}
                <Button className="btn-custom1" href="https://github.com/Calvin-Yap/PersonalWebsite" target="_blank" rel="noopener noreferrer">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>       
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://i.imgur.com/7WMsPVH.png" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Tracktor</h1>
                  <h6>January 2019 - Present</h6>
                  <p className="projectPara"> A web application developed for RUHacks that allows local product developers to connect to a large-scale marketplace </p>
                  <ul>
                    <li>Developed using ReactJS (Web App) and Proto.io (Mobile App). Hosted with Google Cloud Services.</li>
                    <li>Created using a <strong> Façade </strong> design pattern to mimic a large working system to help establish a smooth user interface.</li>
                  </ul>    
                {/*<Button className="btn-custom1">More</Button>{' '}*/}
                <Button className="btn-custom1" href="https://github.com/Calvin-Yap/RuHacks" target="_blank" rel="noopener noreferrer">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://i.imgur.com/P6AbVHQ.png" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Grocery App</h1>
                  <h6>February 2018 - March 2018</h6>
                  <p className="projectPara"> A portable grocery simulation developed using Java along with a Java GUI interface. Done for CPS209 (Computer Science II)</p>
                  <ul>
                    <li>Utilized Java’s features of <strong> object-orientation</strong> with <strong>overloading</strong> and <strong>polymorphism</strong> when designing the overall structure. </li>
                  </ul>               
                   {/*<Button className="btn-custom1">More</Button>{' '}*/}
                <Button className="btn-custom1" href="https://github.com/Calvin-Yap/GroceryApp" target="_blank" rel="noopener noreferrer">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://i.imgur.com/d8RW83Q.png" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Interval Union</h1>
                  <h6>October 2018 - November 2018</h6>
                  <p className="projectPara"> Purely Java code in which the challenge was to compute the union and intersection between sets of numbers. Done for CPS305 (Data Structures). </p>
                  <ul>
                    <li>Placed in the top 80 percentile in terms of computation time among peers.</li>
                  </ul>                {/*<Button className="btn-custom1">More</Button>{' '}*/}
                <Button className="btn-custom1" href="https://github.com/Calvin-Yap/IntervalUnion" target="_blank" rel="noopener noreferrer">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://i.imgur.com/MaJLlOP.png" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Pokedex Mobile App</h1>
                  <h6>January 2019 - February 2019</h6>
                  <p className="projectPara">A Mobile App that allows users to quickly search up and identify all the different types of Pokemon, was intended to be a pairing app to the popular mobile app “Pokemon GO.”</p>
                  <ul>
                    <li>First dive into mobile app development. Created using Android Studios along with an Algolia DB. This was part of a MLH Tutorial</li>
                    
                  </ul>                {/*<Button className="btn-custom1">More</Button>{' '}*/}
                <Button className="btn-custom1" href="https://github.com/Calvin-Yap/Pokedex-Android-App" target="_blank" rel="noopener noreferrer">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
          <div className="projectShowcase">
            <Container fluid>
              <Row>
                <Col md="4">
                  <img className="projectImage"src="https://i.imgur.com/RQSqhfh.png" alt="mockup"/>
                </Col>
                <Col md="8">
                <div className="projectText">
                  <h1 className="projectTitle">Bash Fibonacci</h1>
                  <h6>September 2018 - October 2018</h6>
                  <p className="projectPara"> A Bash script that shows the speed difference in computing the numbers of Fibonacci with recursion and with saving values.</p>
                  <ul>
                    <li>Simple shell script assignment done for CPS393 (Introduction to UNIX, C and C++).</li>
                  </ul>                {/*<Button className="btn-custom1">More</Button>{' '}*/}
                <Button className="btn-custom1" href="https://github.com/Calvin-Yap/Bash-Fibonacci" target="_blank" rel="noopener noreferrer">Github</Button>{' '}

                </div>
                </Col>
              </Row>
            </Container>
            
          </div >
        </div>
        
    <Footer/>
    </div>
    )
  }
}

export default Projects;
