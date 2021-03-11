import React from 'react';
import './Sidebar.scss';
import logo from '../assets/spotify.jpg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src={logo} alt='spotify logo' />
    </div>
  );
};

export default Sidebar;
