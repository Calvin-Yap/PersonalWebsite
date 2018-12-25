import React from 'react';
import './home.css';
const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="right" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
