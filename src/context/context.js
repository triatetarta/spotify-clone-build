import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import reducer from '../reducer';

const GlobalContext = createContext();

const spotify = new SpotifyWebApi();

const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, spotify }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
