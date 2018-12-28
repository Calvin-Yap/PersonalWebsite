import React from 'react';
import './home.css';
import Typing from 'react-typing-animation';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
        return (
          <div className="down">
          <br/>
          <Typing className="Typer">
          <Typing.Speed ms={30} />
            <span>Hi, I am Calvin Yap</span>
          </Typing>
          <br/>
          <div className="links">
          <a className="links" href="https://github.com/Calvin-Yap"><FontAwesomeIcon className="fontawesome" icon={['fab', 'github']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fab', 'linkedin']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fas', 'file']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome"icon={['fas', 'envelope']} size="2x" /></a>
          </div>
          <br/>
          <br/>
     <div className="boxshadow">
     <div className="row">
       <div className="column">
         <div className="shifter">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
    <br/>
    <br/>
    <br/>
    <div>
      <h1> About Me</h1>
    </div>
    <div>
      <h1> Projects</h1>
    </div>
    <footer>
    <p>Made by Calvin Yap </p>
    <p>&copy; 2018 Calvin Yap</p>
    </footer>
</div>
    );
  }
}

export default Home;
