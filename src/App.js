import React, { Component } from 'react';
import { BrowserRouter as Router,} from "react-router-dom";

import About from "./components/About/about";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Navigation from "./components/Navigation/navigation";
import Contact from "./components/Contact/contact"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faFile, faEnvelope, faCode, faMedal, faDumbbell, faDog, faCar, faGamepad, faPlane} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub,faJava,faDev } from '@fortawesome/free-brands-svg-icons';
import ScrollToTopRoute from "./scrolltotop";
library.add(faFile,faEnvelope,faLinkedin,faGithub, faCode, faMedal, faDumbbell,faSmile,faDog,faCar,faJava,faDev,faGamepad,faPlane);
class App extends Component {

/*  authenticate(){
  return new Promise(resolve => setTimeout(resolve, 1000))
}
  componentDidMount(){
     this.authenticate().then(() => {
        const loading = document.getElementById('ipl-progress-indicator')
        if(loading){
          loading.classList.add('available')
          setTimeout(() => {
            loading.outerHTML = ''
          }, 2000)
        }
      })
    }
*/

  render() {
    return (
      <Router>
      
        <div>
        <Navigation />
       
          <ScrollToTopRoute path="/" component={Home} exact />
          <ScrollToTopRoute path="/about" component={About}/>
          <ScrollToTopRoute path="/projects" component={Projects}/>
          <ScrollToTopRoute path="/contact" component={Contact}/>
  
        </div>
     </Router>
    );
  }
}

export default App;
