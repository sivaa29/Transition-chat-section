import React from 'react';
import './CaseFavorites.css';

const CaseFavorites = () => {
  return (
    <div className="case-favorites">
      <div className='container'>
      <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733104857/pin_yso8cl.png' alt='profile' className="icon"/>
      <h3 className='heading'>Case Favorites</h3>
      </div>
      <ul className="case-list">
        <li className="case-item">Lorem ipusm dolor sit amet</li>
        <li className="case-item">Photo</li>
        <li className="case-item">Lorem ipusm dolor sit amet</li>
      </ul>
    </div>
  );
};

export default CaseFavorites;
