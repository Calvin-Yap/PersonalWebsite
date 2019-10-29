
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../../assets/CV.pdf'

class footer extends React.Component{
  render(){

        return (
      <div>
    <footer>
      <a className="bottomlinks" href="https://github.com/Calvin-Yap" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontawesomeFoot" icon={['fab', 'github']} size="lg"/></a>
      <a className="bottomlinks" href="https://www.linkedin.com/in/calvin-yap-b83275193/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontawesome" icon={['fab', 'linkedin']} size="lg" /></a>
      <a className="bottomlinks" href={Resume} target="blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fontawesomeFoot" icon={['fas', 'file']} size="lg" /></a>
      <a className="bottomlinks" href="mailto:calvin.yap@ryerson.ca"><FontAwesomeIcon className="fontawesomeFoot"icon={['fas', 'envelope']} size="lg" /></a>
    <br/>
    <br/>
    <p>Made by Calvin Yap </p>
    <p>&copy; 2018 Calvin Yap</p>
    </footer>
   </div>
        )
  }
}
export default footer;
