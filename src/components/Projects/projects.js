import React from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Projects extends React.Component{
  render(){
    document.body.style.backgroundColor = "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>

        <div className="box">
          <h1 className="titleprojects"> Projects </h1>
          <h1 className="projectlinks">Java</h1>
          <h1 className="projectlinks">Web Development</h1>
          <h1 className="projectlinks">Hackathons</h1>
          <h1 className="projectlinks">More</h1>
        </div>


        <div className="javaBox">
          <h1 className="subLinks">How I Started Coding</h1>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Java</h1>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Web Development</h1>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Hackathons</h1>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">More</h1>
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
