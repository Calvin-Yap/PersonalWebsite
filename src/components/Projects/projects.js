import React from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Projects extends React.Component{
  render(){
        return (
      <div>

        <div className="box">
          <h1 className="titleprojects"> Projects </h1>
          <h1 className="projectlinks"><AnchorLink className="anchor1" offset="200"  href='#Java'>Java</AnchorLink></h1>
          <h1 className="projectlinks"><AnchorLink className="anchor1" offset="200"  href='#WebDev'>Web Development</AnchorLink></h1>
          <h1 className="projectlinks"><AnchorLink className="anchor1" offset="200"  href='#Hackathon'>Hackathons</AnchorLink></h1>
          <h1 className="projectlinks"><AnchorLink className="anchor1" offset="200"  href='#More'>More</AnchorLink></h1>
        </div>


        <div className="javaBox">
          <h1 className="subLinks">How I Started Coding</h1>
          <p className="text">At a young age I was fasinated on computers and how they worked. When I was 4 my mom came home with a brand new computer, back then these things were
          huge and bulky, but I still saw it like it was something made from outerspace. I would spend time playing games on PBS kids and from that point on I was hooked on how this machine worked.
          During highschool I took a lot of computer related courses, learning things like parts of a computer, how to assemble one, and turing.
          This again peaked my interests and got the gears turning until where I am today, studying computer science at Ryerson.  </p>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Java</h1>
          <section id='Java'/>
          <div class="row">
            <div className="projectColumn">
          <img className="projectgif" src="https://i.gyazo.com/1d71ebca096539bc629a4a2afc3f7249.gif" alt="grocery cart java" />
          <h1>Grocery Cart</h1>
          <a>Preview</a>
          <a>  Github</a>
          <p>Creation Date:</p>
          <p>Purpose:</p>
            </div>
            <div className="projectColumn">
              
              </div>
          </div>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Web Development</h1>
          <section id='WebDev'/>
          <div class="row">
            <div className="projectColumn">
          <img className="projectgif" src="https://i.gyazo.com/ede7799c7ae0247bcf7a8cc6e0651b35.gif" alt="grocery cart java" />
          <h1>Tracktor</h1>
          <p>Creation Date:</p>
          <p>Purpose:</p>
          
            </div>
            <div className="projectColumn">
          <img className="projectgif" src="https://i.gyazo.com/fa506f723a4a726ef9563b477088d1c7.gif" alt="grocery cart java" />
            <h1>Marvel Tutorial Website</h1>
            <p>Creation Date:</p>
            <p>Purpose:</p>
            </div>
            <div className="projectColumn">
          <img className="projectgif" src="https://i.gyazo.com/8a88100f3600588cd00d60d3fc79d6bd.gif" alt="grocery cart java" />
            <h1>Food4Kids</h1>
            <p>Creation Date:</p>
            <p>Purpose:</p>
            </div>
          </div>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">Hackathons</h1>
          <section id='Hackathon'/>
          <p className="text">I like to compete in Hackathons to improve my cooperation skills and to just have fun. I have competed in several Hackathons in the past here is a list of the ones I have been to.</p>
        </div>
        <div className="javaBox">
          <h1 className="subLinks">More</h1>
          <section id='More'/>
          <p className="text1">Coming Soon .....</p>

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
