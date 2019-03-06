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
    //document.body.style.background = "url('https://images.unsplash.com/photo-1500993855538-c6a99f437aa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center";;
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";

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
          <Typing loop="true" className="Typer">
          <Typing.Speed ms={50} />
          <span>Hi, I am Calvin Yap</span>
          <Typing.Reset count={1} delay={2000} />
          <span>I like to make stuff</span>
          <Typing.Delay ms={1500} />
          <Typing.Backspace count={10} />
          <span>code projects</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={13} />
            <span>create Java Apps</span>
              <Typing.Delay ms={1500} />
              <Typing.Backspace count={16} />
            <span>cook food</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={9}/>
            <span>play sports</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={25} />
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
     <div className="boxshadow">

     <div className="row">
       <div className="column">
         <div className="shifter">
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
    <h1 className="montserrat1"> Projects</h1>
      <div className="blackboard1">
        <p className="paragraph2"> Feel free to browse through my projects, I'm always working on something new 💡</p>
            <Container>
        <Row>
        <Col xs="6" sm="4">
        <Card className="white">
          <CardImg top width="100%" src="https://i.imgur.com/6wFFao9.png" alt="Card image cap" />
          <CardBody>
            <CardTitle className="title">Java Projects ☕️</CardTitle>
            <hr/>
            <CardText className="center1">Programs made with Java and Eclipse</CardText>
            <Button className="btn-custom"><NavLink className="aboutlink" to="/projects">Learn More</NavLink></Button>
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
            <Button className="btn-custom"><NavLink className="aboutlink" to="/projects">Learn More</NavLink></Button>
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
           <Button className="btn-custom"><NavLink className="aboutlink" to="/projects">Learn More</NavLink></Button>
          </CardBody>
        </Card>
        </Col>
        </Row>
        </Container>

    </div>


    <h1 className="bigText"> My Life</h1>
    <div className="row">
    <div className="column1">
    <div className="blackboard">
    <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
    );
  }
}
export default Home;
