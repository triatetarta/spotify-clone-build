import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import reducer from '../reducer';

const GlobalContext = createContext();

const spotify = new SpotifyWebApi();

const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  top_artists: null,
  playing: false,
  item: null,
  searched_artist: [],
  new_releases: null,
  recent_played: null,
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getMyTopArtists().then((topArtists) => {
        dispatch({
          type: 'GET_TOP_ARTISTS',
          top_artists: topArtists,
        });
      });

      spotify.getFeaturedPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists.playlists.items,
        });
      });

      spotify.getNewReleases().then((new_r) => {
        dispatch({
          type: 'SET_NEW_RELEASES',
          new_releases: new_r,
        });
      });

      spotify.getMyRecentlyPlayedTracks().then((recent) => {
        dispatch({
          type: 'GET_RECENT_PLAYED',
          recent_played: recent.items,
        });
      });
    }
  }, [dispatch]);

  const searchHandler = (term) => {
    spotify.searchArtists(term).then((results) => {
      dispatch({
        type: 'SET_SEARCHED_ARTIST',
        searched_artist: results.artists.items,
      });
    });
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, spotify, searchHandler }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
