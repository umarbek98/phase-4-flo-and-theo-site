import React from 'react';
import './PressCard.css'
function PressCard(props) {
  return (
    <li>
      <img src= {props.imgSrc} alt={props.imgAlt} />
      <div className="overlay">
        <span>{props.imgAlt}</span>
      </div>
    </li>
  );
}

export default PressCard;

