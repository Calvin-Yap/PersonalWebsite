import React from 'react';
import './home.css';
class Home extends React.Component{
  render(){
    document.body.style.backgroundColor = "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
          <div>
          <p class="line-1 anim-typewriter">Hi, I am Calvin Yap</p>
            <div className="links">
            <a className="links" href="https://github.com/Calvin-Yap">Github</a>
            <a className="links" href="linkedman">Linkedin</a>
            <a className="links" href="linkedman">Resume</a>
            <a className="links" href="linkedman">Email</a>
            </div>
          </div>
    )
  }
}

export default Home;
