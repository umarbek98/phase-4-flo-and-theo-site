import React from 'react';
import './PressCard.css'
function PressCard(props) {
  return (
    <li>
      <a href={props.imgUrl} target="_blank" rel="noopener noreferrer">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </a>
      <div className="overlay">
        <span></span>
      </div>
    </li>
  );
}

export default PressCard;

