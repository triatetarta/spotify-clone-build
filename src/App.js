import React from 'react';
import './App.scss';
import Login from './components/Login';
import Player from './components/Player';
import { useGlobalContext } from './context/context';

const App = () => {
  const { token } = useGlobalContext();

  return <div className='app'>{token ? <Player /> : <Login />}</div>;
};

export default App;
