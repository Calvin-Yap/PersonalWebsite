import React from 'react';
import './home.css';
import Typing from 'react-typing-animation';
import {Carousel} from 'react-bootstrap'


class Home extends React.Component{
  state = { theme: null }

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }
  render(){
    document.body.style.backgroundColor = "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
    const { theme } = this.state;
   const themeClass = theme ? theme.toLowerCase() : 'default';

   const parentContainerStyles = {
     position: 'absolute',
     height: '100%',
     width: '100%',
     display: 'table'
   };

   const subContainerStyles = {
     position: 'relative',
     height: '100%',
     width: '100%',
     display: 'table-cell',
     verticalAlign: 'middle'
   };
        return (
          <div>
          <Typing className="Typer">
          <Typing.Speed ms={50} />
            <span>Hi, I am Calvin Yap</span>
          </Typing>

            <div className="links">
            <a className="links" href="https://github.com/Calvin-Yap">Github</a>
            <a className="links" href="linkedman">Linkedin</a>
            <a className="links" href="linkedman">Resume</a>
            <a className="links" href="linkedman">Email</a>
            </div>

            <Carousel>
              <Carousel.Item>
                <img width={2000} height={100} alt="900x500" src="https://cn.opendesktop.org/img/e/a/9/8/6fe4bb926f48f7ef104b56f95d53e999c3cd.jpg" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/carousel.png" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/carousel.png" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>;




          </div>
    )
  }
}

export default Home;
