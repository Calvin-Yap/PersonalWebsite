import React from 'react';
import { NavLink }  from "react-router-dom";
import './navigation.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: props.initialModalState,
        fade: true
    };

    this.toggle = this.toggle.bind(this);
}

toggle() {
    this.setState({
        modal: !this.state.modal,
        fade: !this.state.fade

    });
}
  render(){
    return (
    <div className="nav">
        <NavLink  className="normal" to="/" ><span className="linkspan">HOME</span></NavLink>
        <NavLink className="normal" to="/about"><span className="linkspan">ABOUT</span></NavLink>
        <NavLink className="normal" to="/projects"><span className="linkspan">PROJECTS</span></NavLink>
        <button className="link" onClick={this.toggle}><span className="linkspan">CONTACT</span></button>
      
       <Modal isOpen={this.state.modal} toggle={this.toggle}
              fade={this.state.fade}
              className={this.props.className}>
           <ModalHeader className="modalshift" toggle={this.toggle}><h1 className="heading">Contact Me!</h1></ModalHeader>
           <ModalBody>
            <p className="modalbody">Phone: (647)-990-3688</p>
            <p className="modalbody">Email: calvin.yap@ryerson.ca</p>
            <p className="modalbody">Feel free to leave me an email about anything!</p>

           </ModalBody>
           <ModalFooter>
               <Button color="secondary" onClick={this.toggle}>Close</Button>
           </ModalFooter>
       </Modal>


   </div>

    );
  }
}

export default Navigation;