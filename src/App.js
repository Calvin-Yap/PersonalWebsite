import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./components/About/about";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Navigation from "./components/Navigation/navigation";
import Contact from "./components/Contact/contact"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faFile, faEnvelope, faCode, faMedal, faDumbbell, faDog, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faFile,faEnvelope,faLinkedin,faGithub, faCode, faMedal, faDumbbell,faSmile,faDog,faBriefcase);
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
      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
