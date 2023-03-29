import React from 'react';
import './ingredient.css';

const Ingredient = (props) => {
  return (
    <div className='flex-container'>
      <div className='product-image'>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className='product-description'>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Ingredient;
