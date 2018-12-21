import React from 'react';
import { NavLink }  from "react-router-dom";
import './navigation.css';
class Navigation extends React.Component {
  render(){
    return (
      <div className="nav">
        <NavLink  className="normal" to="/" >Home</NavLink>
        <NavLink className="normal" to="/about">About</NavLink>
        <NavLink className="normal" to="/projects">Projects</NavLink>
        <NavLink className="normal" to="/contact">Contact</NavLink>
      </div>
    );
  }
}

export default Navigation;
