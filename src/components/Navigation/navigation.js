import React from 'react';
import { NavLink }  from "react-router-dom";
import './navigation.css';

class Navigation extends React.Component {

  render(){

    return (
      <div className="nav">
        <NavLink  className="normal" to="/" ><span className="linkspan">HOME</span></NavLink>
        <NavLink className="normal" to="/about"><span className="linkspan">ABOUT</span></NavLink>
        <NavLink className="normal" to="/projects"><span className="linkspan">PROJECTS</span></NavLink>
        <NavLink className="normal"to= "/contact"><span className="linkspan">CONTACT</span></NavLink>
      </div>

    );
  }
}

export default Navigation;
