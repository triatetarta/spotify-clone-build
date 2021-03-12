import React, { useState } from 'react';
import './FooterButtons.scss';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { useGlobalContext } from '../context/context';

const FooterButtons = () => {
  const { playing, dispatch, spotify } = useGlobalContext();
  const [shuffle, setShuffle] = useState(false);
  const [random, setRandom] = useState(false);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    }
  };

  return (
    <div className='footer__center'>
      <ShuffleIcon
        onClick={() => setShuffle(!shuffle)}
        className={shuffle ? 'footer__green active' : 'footer__green'}
      />
      <SkipPreviousIcon className='footer__icon' />
      {playing ? (
        <PauseCircleOutlineIcon
          onClick={handlePlayPause}
          fontSize='large'
          className='footer__icon'
        />
      ) : (
        <PlayCircleFilledWhiteOutlinedIcon
          onClick={handlePlayPause}
          fontSize='large'
          className='footer__icon'
        />
      )}

      <SkipNextIcon className='footer__icon' />
      <RepeatIcon
        onClick={() => setRandom(!random)}
        className={random ? 'footer__green active' : 'footer__green'}
      />
    </div>
  );
};

export default FooterButtons;
