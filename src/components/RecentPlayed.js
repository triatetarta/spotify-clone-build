import React from 'react';
import './RecentPlayed.scss';
import { useGlobalContext } from '../context/context';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const RecentPlayed = () => {
  const { recent_played, playing } = useGlobalContext();
  console.log(recent_played);

  return (
    <div className='recentPlayed'>
      <h2>Recently Played</h2>
      <div className='recentPlayed__container'>
        {recent_played?.map((item, index) => {
          const { context, track } = item;

          return (
            <article className='recentPlayed__card' key={index}>
              <img
                className='recentPlayed__cardImage'
                src={track?.album?.images[0]?.url}
                alt={track.name}
              />
              <h4>{track.artists[0]?.name}</h4>
              <p>{track.name}</p>
              <div className='body__icons'>
                {playing ? (
                  <PauseCircleFilledIcon className='body__shuffle' />
                ) : (
                  <PlayCircleFilledIcon className='body__shuffle' />
                )}

                <FavoriteIcon fontSize='default' />
                <MoreHorizIcon />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default RecentPlayed;
