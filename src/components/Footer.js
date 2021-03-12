import React, { useEffect } from 'react';
import './Footer.scss';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import { useGlobalContext } from '../context/context';
import FooterButtons from './FooterButtons';

const Footer = () => {
  const { item, dispatch, spotify } = useGlobalContext();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: 'SET_PLAYING',
        playing: r.is_playing,
      });

      dispatch({
        type: 'SET_ITEM',
        item: r.item,
      });
    });
  }, [spotify]);

  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          className='footer__albumLogo'
          src={
            item?.album.images[1].url ||
            item?.images[1].url ||
            'http://assets.stickpng.com/images/5ece5029123d6d0004ce5f8b.png'
          }
          alt={item?.name || item?.artists}
        />
        {item ? (
          <div className='footer__songInfo'>
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className='footer__songInfo'>
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <FooterButtons />

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
