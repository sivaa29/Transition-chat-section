import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="tabs">
        <button className="tab active">Cheyenne Bergson</button>
        <button className="tab">Jonathan Higgins</button>
        <button className="tab">Capt. Trunk</button>
        <button className="tab">Hannibal Smith</button>
      </div>
      <div className="actions">
        <button className="process">Process Owner HOD</button>
        <button className="admin">Admin</button>
        <p className='palakbansal'>Plak bansal</p>
        <img src="https://res.cloudinary.com/dfpz92ddp/image/upload/v1733041511/98ac8b5440b32e95a31a25f0b7d349ac_mvhzk0.jpg" alt="profile" className="image"/>
        <span className="icon">⚙️</span>
        <img src="https://res.cloudinary.com/drqwanejb/image/upload/v1733073786/sign-out_ytzslm.png" alt="profile" className="log-image"/>
        <p className="logout">Logout</p>
      </div>
    </header>
  );
}

export default Header;
