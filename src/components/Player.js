import React from 'react';
import './Player.scss';

const Player = ({ display_name }) => {
  return (
    <div>
      <h1>{display_name}</h1>
    </div>
  );
};

export default Player;
