import React from 'react';
import './UserDetails.css';

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className='user-inner-container'>
        <div className="profile-header">
        <div className="avatar">CB</div>
          <div className="user-info">
            <h3 className="user-name">Hannibal Smith</h3>
            <div className='user-location-container'>
            <p className="user-role">1 Market Street San Francisco, CA 94105</p>
            </div>
          </div>
        </div>

        <div class="card"> 
          <div className='content'> 
            <div class="label">Customer ID</div> 
            <div class="value">12345</div> 
          </div> 
          <div> 
            <div class="label">Email Address</div> 
            <div class="value">rachel@sample.com</div>
          </div> 
          <div> 
            <div class="label">Phone Number</div>
            <div class="value">8051298905</div>
          </div> 
          <div class="add-button">+ Add</div> 
        </div>

        <div class="card2"> 
          <div className='content'> 
            <div class="label">Loyalty Tier</div> 
            <div class="value">Silver</div> 
          </div> 
          <div> 
            <div class="label">Segment</div> 
            <div class="value">Sleepy Customer</div>
          </div>
          <div class="add-button">+ Add</div> 
        </div>

        <div class="card2"> 
          <div className='content'> 
            <div class="label">Lifetime Value</div> 
            <div class="value">$ 1M</div> 
            <div>
            <div class="label">Propensity to Purchase</div> 
            <div class="value">75%</div> 
            </div>
          </div> 
          <div class="add-button">+ Add</div> 
        </div>

        <div class="card3"> 
          <div className='content'> 
            <div class="label">Engagement Score</div> 
            <div class="value">80%</div> 
          </div> 
          <div class="add-button">+ Add</div> 
        </div>
        <button className='btn btn-primary'>Assign other Agent</button>
        <button className='btn btn-widget'>Add New Widget</button>
      </div>
    </div>
  );
};

export default UserDetails;
