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
           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
           <ModalBody>


           </ModalBody>
           <ModalFooter>
               <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
               <Button color="secondary" onClick={this.toggle}>Cancel</Button>
           </ModalFooter>
       </Modal>


   </div>

    );
  }
}

export default Navigation;