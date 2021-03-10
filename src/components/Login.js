import React from 'react';
import './Login.scss';
import logo from '../assets/spotify.jpg';
import { accessUrl } from '../spotify';

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt='spotify logo' />
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
