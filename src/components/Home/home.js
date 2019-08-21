import React from 'react';
import './home.css';
import Typing from 'react-typing-animation';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import { NavLink }  from "react-router-dom";
import {VerticleButton  as ScrollUpButton} from "react-scroll-up-button";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Particles from 'react-particles-js';
class Home extends React.Component{
  constructor(props) {
  super(props)

  this.state = {
    images: [
      "https://i.imgur.com/uv8YXG8.jpg",
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


    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
    };

        return (
          <div className="down">

          <ScrollUpButton />
          <div>
          
          <h1 className="homeIntro">Hi! I am Calvin Yap. I like to create interactive websites.</h1>
          <Typing loop="true" className="Typer">
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
            <Typing.Reset count={1} delay={500} />
            <span>Welcome to my page!</span>
          <Typing.Delay ms={5000} />
        </Typing>
          <div className="links">
          <a className="links" href="https://github.com/Calvin-Yap" target="_blank"><FontAwesomeIcon className="fontawesome" icon={['fab', 'github']} size="2x"/></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fab', 'linkedin']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fas', 'file']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome"icon={['fas', 'envelope']} size="2x" /></a>
          </div>
          <button className="button1"><AnchorLink className="anchor" offset="100"  href='#me'>Who Am I?</AnchorLink></button>
          
          </div>
     <div className="boxshadow">

     <div className="row">
       <div className="column">
         <div className="shifter">
         <section id='me'/>
         <h1 className="montserrat">About Me. </h1>
         <hr className="hrstyle"/>
         <p className="paragraph">Hi, welcome to my page!</p>
         <p className="paragraph">
         I am a second year Computer Science student studying at Ryerson University. I enjoy long walks with my dog,
         practicing martial arts, playing frisbee, and many other things. I am currently interested in the fileds of artifical intelligence and data sciences. Also, I am always eager and excited
         to learn new things and create new projects that both further my learning and to help others. </p>
       <p className="interests"> Interests </p>
        <div className="row">
         <div className="column5" >
         <FontAwesomeIcon className="nicole" icon={['fab', 'dev']} size="2x" />
         <p className="icons">Web Dev</p>
         <FontAwesomeIcon className="nicole" icon={['fas', 'medal']} size="2x" />
         <p className="icons">Sports</p>

         </div>
         <div className="column5">
         <FontAwesomeIcon className="nicole"icon={['fas', 'dumbbell']} size="2x" />
         <p className="icons">Fitness</p>
         <FontAwesomeIcon className="nicole" icon={['fab', 'java']} size="2x" />
         <p className="icons">Java</p>
         </div>
         <div className="column5">
         <FontAwesomeIcon className="nicole" icon={['fas', 'dog']} size="2x" />
         <p className="icons">Dogs</p>
         <FontAwesomeIcon className="nicole"icon={['fas', 'headphones']} size="2x" />
         <p className="icons">Music</p>
         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <Button className="btn-custom"  size="lg"><NavLink className="aboutlink" to="/about">Learn More</NavLink></Button>
         </div>
         </div>
       </div>
       <div className="column6">
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

         <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
         />

         <RightArrow
          goToNextSlide={this.goToNextSlide}
         />
       </div>
     </div>
   </div>
       </div>


   {/* <h1 className="montserrat1"> Projects</h1>
      <div className="blackboard1">
        <p className="paragraph2"> Feel free to browse through my projects, I'm always working on something new 💡</p>
            <Container>
        <Row>
        <Col xs="6" sm="4">
        <Card className="white">
          <CardImg top width="100%" src="https://i.imgur.com/6wFFao9.png" alt="Java icon" />
          <CardBody>
            <CardTitle className="title">Java Projects ☕️</CardTitle>
            <hr/>
            <CardText className="center1">Programs made with Java and Eclipse</CardText>
            
          </CardBody>
        </Card>
        </Col>
        <Col xs="6" sm="4">
        <Card className="white">
          <CardImg top width="100%" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle className="title">Web Development 💻</CardTitle>
            <hr/>
            <CardText className="center1">Web / Mobile Development projects</CardText>
          </CardBody>
        </Card>
        </Col>
        <Col xs="6" sm="4">
        <Card className="white">
          <CardImg top width="99%" src="https://i.imgur.com/K5sF62o.png" alt="Card image cap" />
          <CardBody>
            <CardTitle className="title">Hackathons 🏅</CardTitle>
            <hr/>
            <CardText className="center1">Projects created during Hackathons</CardText>
          </CardBody>
        </Card>
        </Col>
        </Row>
        </Container>
        <Button className="btn-custom"><NavLink className="aboutlink" to="/projects">Learn More</NavLink></Button>

    </div>*/}


   {/* <h1 className="bigText"> My Life</h1>
    <div className="row">
    <div className="column1">
    <div className="blackboard">
    <p className="paragraph">My life is interesting in weird and wacky ways.</p>
    <p className="paragraph">Here I will post lastest photos of events happening to me and this will expand to blog posts in the future</p>
    <p className="paragraph">Stay Posted....</p>

    </div>
    </div>
    <div className="column2">
    <div className="grain">
    <Slider className="margin"{...settings}>
    <div>
    <img className="imgslide"src="http://placekitten.com/g/400/200" />
    </div>
    <div>
    <img className="imgslide" src="http://placekitten.com/g/400/200" />
    </div>
    <div>
    <img  className="imgslide" src="http://placekitten.com/g/400/200" />
    </div>
    <div>
    <img  className="imgslide" src="http://placekitten.com/g/400/200" />
    </div>
    </Slider>
     </div>
            </div>
    </div>*/}





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
    );
  }
}
export default Home;
