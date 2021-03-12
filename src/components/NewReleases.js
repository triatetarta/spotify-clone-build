import React from 'react';
import './NewReleases.scss';
import { useGlobalContext } from '../context/context';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const NewReleases = () => {
  const { new_releases, playing } = useGlobalContext();

  console.log(new_releases);

  return (
    <div className='newReleases'>
      <strong>PLAYLIST</strong>
      <h2>New Releases</h2>
      <div className='newReleases__container'>
        {new_releases?.albums?.items.map((item) => {
          const { id, images, name, artists } = item;

          return (
            <article className='newReleases__card' key={id}>
              <img
                className='newReleases__cardImage'
                src={images[0]?.url}
                alt={name}
              />
              <h4>{artists[0]?.name}</h4>
              <p>{name}</p>
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

export default NewReleases;
