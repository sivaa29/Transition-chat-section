import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src='https://res.cloudinary.com/dfpz92ddp/image/upload/v1733040153/riskhawk-logo_1_f6b11r.svg' alt='company' className='company-logo'/>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073709/file-search-02_vsyp9k.png' alt='profile' className="icon"/>
          <p className="menu-item">Internal Audit</p>
        </li> 
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073165/file-check-02_e31om8.png' alt='profile' className="icon"/>
          <p className="menu-item">UAT Testing</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073237/link-03_x7cleu.png' alt='profile' className="icon"/>
          <p className="menu-item">Intract</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073266/users_1_iwnrwt.png' alt='profile' className="icon"/>
          <p className="menu-item">Queue</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073308/sitemap_xob8t9.png' alt='profile' className="icon"/>
          <p className="menu-item">Workflow</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073341/user_h82r2x.png' alt='profile' className="icon"/>
          <p className="menu-item">Admin</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073380/box_b5tblu.png' alt='profile' className="icon"/>
          <p className="menu-item">Asset</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073415/users_kzxi2f.png' alt='profile' className="icon"/>
          <p className="menu-item">Parent</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073448/circle-off_gwq81p.png' alt='profile' className="icon"/>
          <p className="menu-item">Option One</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073649/circle-off_1_tdlg4i.png' alt='profile' className="icon"/>
          <p className="menu-item">Option Two</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073618/wrench_ml7y9w.png' alt='profile' className="icon"/>
          <p className="menu-item">All Accessories</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073551/Icon_1_wdkx5y.png' alt='profile' className="icon"/>
          <p className="menu-item">Decorating</p>
        </li>
        <li className="sidebar-item active">
          <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733073517/Vector_xc7m7o.png' alt='profile' className="icon"/>
          <p className="menu-item">Presenting</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
