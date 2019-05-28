import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    document.body.style.backgroundColor = "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>

        <div className="boxabout">
          <h1 className="titleabout"> About Me </h1>
          <h1 className="aboutlinks">Education</h1>
          <h1 className="aboutlinks">Experience</h1>
          <h1 className="aboutlinks">Interests</h1>
        </div>

        <div className="javaBox">
          <h1 className="subLinks">A Little About Me</h1>
          <img className="aboutmephoto" src="https://i.imgur.com/sqfhCF3.jpg"/>
          <div className="links">
          <a className="links" href="https://github.com/Calvin-Yap" target="_blank"><FontAwesomeIcon className="fontawesome" icon={['fab', 'github']} size="2x"/></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fab', 'linkedin']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome" icon={['fas', 'file']} size="2x" /></a>
          <a className="links" href="linkedman"><FontAwesomeIcon className="fontawesome"icon={['fas', 'envelope']} size="2x" /></a>
          </div>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Education</h1>
          <img className="ryersonlogo" src="https://i.imgur.com/6dXhSzX.png"/>
          <p className="text">I am currently a second year student studying Computer Science at Ryerson University. Here I gain the proper experience for coding langauges while learning about data structures, algorithms, networks, and operating systems. I am aimming towards focus in the fields of software design, computer vision, and artifical intelligence.</p>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Experience</h1>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Interests</h1>
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
