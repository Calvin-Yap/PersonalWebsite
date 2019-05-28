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
<<<<<<< HEAD
        <NavLink className="normal"to= "/contact">CONTACT</NavLink>
=======
        <NavLink className="normal" to="/contact">CONTACT</NavLink>
>>>>>>> parent of dd6f35d... nibba
      </div>

    );
  }
}

export default Navigation;
