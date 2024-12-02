import React from 'react';
import './ActionLauncher.css';

const ActionLauncher = () => {
  return (
    <div className="action-launcher">
      <h3>Action Launcher</h3>
      <input type="text" placeholder="Search Actions..." className='search'/>
      <div className="actions">
        <button className="action-button">Add Action</button>
        <button className="action-button">Fee Reversal</button>
        <button className="action-button">Retail Onboarding</button>
        <button className="action-button">Address Update</button>
      </div>
    </div>
  );
};

export default ActionLauncher;
