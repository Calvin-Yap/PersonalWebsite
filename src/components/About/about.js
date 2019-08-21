import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Collapsible from 'react-collapsible';

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
          <h1 className="aboutlinks"><AnchorLink className="anchor1" offset="200"  href='#Education'>Education</AnchorLink></h1>
          <h1 className="aboutlinks"><AnchorLink  className="anchor1" offset="200"  href='#Experience'>Experience</AnchorLink></h1>
          <h1 className="aboutlinks"><AnchorLink  className="anchor1" offset="200"  href='#Interests'>Interests</AnchorLink></h1>
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

          <Collapsible trigger="Education">
          <section id='Education'/>
          <img className="ryersonlogo" src="https://i.imgur.com/6dXhSzX.png"/>
          <p className="text">I am currently a second year student studying Computer Science at Ryerson University. Here I gain the proper experience for coding langauges while learning about data structures, algorithms, networks, and operating systems. I have intrests towards the fields of software design or computer vision, and artifical intelligence.</p>
          </Collapsible>


        </div>
        <div className="javaBox">
        <Collapsible trigger="Experience">
          <section id='Experience'/>
          <p className="text">Currently I am a freelance web desginer. Creating websites for fun and to help out friends and families trying to get a website template started.
          I am planning to find an iternship position to further learn and expand my horizons in the web development field.
          </p>
          </Collapsible>
        </div>
        <div className="javaBox">
        <Collapsible trigger="Interests">
          <section id='Interests'/>
          <p className="text">Most of my hobbies involve being active as I love to play sports. For team sports I like to play volleyball and Ultimate Frisbee with friends. For inividual sports I do karate and I've been doing it for over 11 years now. Other hobbies include weightlifting, listening to music, or teaching my dog some new tricks.</p>
          </Collapsible>

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
