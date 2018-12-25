import React from 'react';
import './home.css';
const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="left" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;
