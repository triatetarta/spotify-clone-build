import React from 'react';
import './SearchedRow.scss';

const SearchedRow = ({ artist }) => {
  return (
    <div className='searchedRow'>
      <img
        className='searchedRow__image'
        src={
          artist.images.length > 0
            ? artist.images[1].url
            : 'http://assets.stickpng.com/images/5ece5029123d6d0004ce5f8b.png'
        }
        alt={artist.name}
      />
      <div className='searchedRow__info'>
        <p>{artist.name}</p>
      </div>
    </div>
  );
};

export default SearchedRow;
