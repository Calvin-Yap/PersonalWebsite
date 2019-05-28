import React from 'react';
import { NavLink }  from "react-router-dom";
import './navigation.css';

class Navigation extends React.Component {

  render(){

    return (
      <div className="nav">
        <NavLink  className="normal" to="/" >HOME</NavLink>
        <NavLink className="normal" to="/about">ABOUT</NavLink>
        <NavLink className="normal" to="/projects">PROJECTS</NavLink>
        <NavLink className="normal"to= "/contact">CONTACT</NavLink>
      </div>

    );
  }
}

export default Navigation;
