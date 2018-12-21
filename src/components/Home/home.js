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
          <p> Ryerson Computer Science Student </p>
          </div>
    )
  }
}

export default Home;
