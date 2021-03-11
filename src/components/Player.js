import React from 'react';
import './Player.scss';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import { useGlobalContext } from '../context/context';

const Player = () => {
  const { spotify } = useGlobalContext();

  console.log(spotify);
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
