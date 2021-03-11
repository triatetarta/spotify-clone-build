import React from 'react';
import './Body.scss';
import Header from './Header';
import SongRow from './SongRow';
import SearchedRow from './SearchedRow';
import { useGlobalContext } from '../context/context';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = ({ spotify }) => {
  const { discover_weekly, searched_artist, playing } = useGlobalContext();

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className='body__songs'>
        <div className='body__icons'>
          {playing ? (
            <PauseCircleFilledIcon className='body__shuffle' />
          ) : (
            <PlayCircleFilledIcon className='body__shuffle' />
          )}

          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {searched_artist.length > 0 ? (
          searched_artist?.map((artist) => {
            return <SearchedRow key={artist.id} artist={artist} />;
          })
        ) : (
          <>
            {discover_weekly?.tracks.items.map((item) => {
              return <SongRow key={item.track.id} track={item.track} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
