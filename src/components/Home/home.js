import React from 'react';
import './home.css';
import Typing from 'react-typing-animation';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Particle from './particle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Row, Col } from 'reactstrap';
import { NavLink }  from "react-router-dom";
import {VerticleButton  as ScrollUpButton} from "react-scroll-up-button";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Home extends React.Component{
  constructor(props) {
  super(props)

  this.state = {
    images: [
      "https://i.imgur.com/1KSiigR.jpg",
      "https://i.imgur.com/uv8YXG8.jpg",
      "https://i.imgur.com/N4r2I20.jpg",
      "https://i.imgur.com/ymn1dhu.jpg",
      "https://i.imgur.com/0YJWGUj.jpg",
      "https://i.imgur.com/SRpfis6.jpg",
      "https://i.imgur.com/3kjSDJU.jpg"
    ],
    currentIndex: 0,
    translateValue: 0
  }
}

goToPrevSlide = () => {
  if(this.state.currentIndex === 0)
    return;

  this.setState(prevState => ({
    currentIndex: prevState.currentIndex - 1,
    translateValue: prevState.translateValue + this.slideWidth()
  }))
}

goToNextSlide = () => {
  if(this.state.currentIndex === this.state.images.length - 1) {
    return this.setState({
      currentIndex: 0,
      translateValue: 0
    })
  }
  this.setState(prevState => ({
    currentIndex: prevState.currentIndex + 1,
    translateValue: prevState.translateValue + -(this.slideWidth())
  }));
}

slideWidth = () => {
   return document.querySelector('.slide').clientWidth
}

  render(){
    document.body.style.backgroundColor= "white";

        return (
          <div className="down">
            <Container fluid>
        <Row>
          <Col md="2"></Col>
          <Col md="8"> <div>
          <h1 className="homeIntro">Hi! I am Calvin Yap, a Computer Science student and tech enthusiast</h1>
          <Typing loop="false" className="Typer">
          <Typing.Speed ms={50} />
          <span>I create react websites.</span>
          <Typing.Reset count={1} delay={2000} />
          <span>I like to make stuff.</span>
          <Typing.Delay ms={1500} />
          <Typing.Backspace count={11} />
          <span>code java projects.</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={19} />
            <span>compete in Hackathons.</span>
              <Typing.Delay ms={1500} />
              <Typing.Backspace count={22} />
            <span>cook food.</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={11}/>
            <span>play sports.</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={26} />
            <span>Welcome to my page!</span>
            <Typing.Reset count={1} delay={5000} />

        </Typing>
          <div className="links">
          <a className="links" href="https://github.com/Calvin-Yap" target="_blank"><FontAwesomeIcon className="fontawesome" icon={['fab', 'github']} size="2x"/></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fab', 'linkedin']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fas', 'file']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome"icon={['fas', 'envelope']} size="2x" /></a>
          </div>
          <button className="button1"><AnchorLink className="anchor" offset="65"  href='#me'>Who Am I?</AnchorLink></button>
          
          </div></Col>
          <Col md="2"></Col>

        </Row>
        </Container>
          <Particle/>
         
         
     <div className="boxshadow">
         <section id='me'/>
         <Container fluid>
           <Row>
             <Col md="6">
               <div className="aboutpad">
              <h1 className="montserrat">About Me. </h1>
              <hr className="hrstyle"/>
              <p className="paragraph">Hi, welcome to my page!</p>
              <p className="paragraph">
              I am a third year Computer Science student studying at Ryerson University. I am an active individual who enjoys walks with my dog, practicing martial arts, playing Frisbee, and weightlifting. In terms of my studies am currently interested in the fields of artificial intelligence and data sciences. In addition, Computer Graphics is another field that I am intrigued by as I love playing indie games so it would be a dream for me to create or help the development of one. I am always eager and excited to learn new things and create new projects that both further my learning and to help others. </p>
              <p className="interests"> Interests </p>
              <div className="spacer"/>
                <Container fluid>
                  <Row>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole" icon={['fab', 'dev']} size="2x"/>
                    <p className="icons"> &emsp;Web Dev</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole" icon={['fas', 'medal']} size="2x"/>
                    <p className="icons"> &emsp;Sports</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole"icon={['fas', 'dumbbell']} size="2x"/>
                    <p className="icons"> &emsp;Fitness</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole" icon={['fab', 'java']} size="2x"/>
                    <p className="icons"> &emsp;Programming</p>
                    </Col>
                  </Row>
                  <div className="spacer"/>
                  <Row>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole" icon={['fas', 'dog']} size="2x"/>
                    <p className="icons">&emsp; Pets</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole"icon={['fas', 'headphones']} size="2x" />
                    <p className="icons">&emsp; Music</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole"icon={['fas', 'gamepad']} size="2x" />
                    <p className="icons">&emsp; Gaming</p>
                    </Col>
                    <Col md="3">
                    <FontAwesomeIcon className="nicole"icon={['fas', 'plane']} size="2x" />
                    <p className="icons"> &emsp;Travel</p>
                    </Col>
                  </Row>
                </Container>
                <div className="spacer"/>
              <Button className="btn-custom"  size="lg"><NavLink className="aboutlink" to="/about">Learn More</NavLink></Button>
              </div>
             </Col>
             <Col md="6">
             <div className="slider">
         <div className="slider-wrapper"
           style={{
             transform: `translateX(${this.state.translateValue}px)`,
             transition: 'transform ease-out 0.45s'
           }}>
             {
               this.state.images.map((image, i) => (
                 <Slide key={i} image={image} />
               ))
             }
         </div>
         <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
         <RightArrow goToNextSlide={this.goToNextSlide}/>
       </div>
             </Col>
           </Row>
         </Container>         
      </div>


    <footer>
    <a className="bottomlinks" href="https://github.com/Calvin-Yap"><FontAwesomeIcon className="fontawesome" icon={['fab', 'github']} size="lg" /></a>
    <a className="bottomlinks" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fab', 'linkedin']} size="lg" /></a>
    <a className="bottomlinks" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fas', 'file']} size="lg" /></a>
    <a className="bottomlinks" href="linkedman"><FontAwesomeIcon className="fontawesome"icon={['fas', 'envelope']} size="lg" /></a>

    <p>Made by Calvin Yap </p>
    <p>&copy; 2018 Calvin Yap</p>
    </footer>
    <ScrollUpButton />
</div>
    );
  }
}
export default Home;
