import React from 'react';
import './Body.scss';
import Header from './Header';
import SearchedRow from './SearchedRow';
import { useGlobalContext } from '../context/context';
import RecentPlayed from './RecentPlayed';
import NewReleases from './NewReleases';

const Body = ({ spotify }) => {
  const { searched_artist } = useGlobalContext();

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__songs'>
        {searched_artist.length > 0 ? (
          searched_artist?.map((artist) => {
            return <SearchedRow key={artist.id} artist={artist} />;
          })
        ) : (
          <>
            <RecentPlayed />
            <NewReleases />
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
