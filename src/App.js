import React, { useEffect, useState } from 'react';
import './App.scss';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        setUser(user);
      });
    }
  }, []);

  console.log(user);

  return <div className='app'>{token ? <Player {...user} /> : <Login />}</div>;
};

export default App;
