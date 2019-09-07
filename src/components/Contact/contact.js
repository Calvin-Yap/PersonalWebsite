
import React from 'react';
import './contact.css';
import Particles from 'react-particles-js';

class Contact extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>
          <div className="parent">
            <div className="child"></div>
          </div>
          <div className="parent">
            <div className="child"></div>
          </div>
      </div>
        )
  }
}
export default Contact;
