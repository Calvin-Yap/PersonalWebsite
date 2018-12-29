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
      "https://i.imgur.com/BoloeNc.gif",
      "https://images.unsplash.com/photo-1500993855538-c6a99f437aa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1545394752-435e18743cae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1545450659-8f9ecd13559d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
          <Typing className="Typer">
          <Typing.Speed ms={50} />
            <span>Hi, I am Calvin Yap</span>
          </Typing>
          <div className="links">
          <a className="links" href="https://github.com/Calvin-Yap"><FontAwesomeIcon className="fontawesome" icon={['fab', 'github']} size="2x" /></a>
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
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <br/>
         <Button color="primary" size="lg"><NavLink className="aboutlink" to="/about">Learn More</NavLink></Button>
         </div>
       </div>
       <div className="column">
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

    <div>

      <h1 className="montserrat1"> Projects.</h1>

      <p className="centre">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <Container>
      <Row>
      <Col xs="6" sm="4">
      <Card>
        <CardImg top width="100%" src="https://i.imgur.com/6wFFao9.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Java Projects</CardTitle>
          <hr/>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="info"><NavLink className="aboutlink" to="/projects">Learn More</NavLink></Button>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" sm="4">
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Web Development </CardTitle>
          <hr/>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="info"><NavLink className="aboutlink" to="/projects">Learn More</NavLink></Button>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" sm="4">
      <Card>
        <CardImg top width="99%" src="https://i.imgur.com/K5sF62o.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Hackathons and Other</CardTitle>
          <hr/>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
         <Button color="info"><NavLink className="aboutlink" to="/projects">Learn More</NavLink></Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>

      <h1 > Gallery</h1>
      <p className="centre">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<div className="boxshadow">
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
      <br/>
      <br/>
      <br/>
    </div>


    <div className="row">
    <div className="column">

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>
    <div className="column">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
