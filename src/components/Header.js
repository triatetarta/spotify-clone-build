import React, { useState } from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useGlobalContext } from '../context/context';

const Header = () => {
  const [text, setText] = useState('');
  const { user, searchHandler } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    searchHandler(text);
    setText('');
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon />
        <form>
          <input
            value={text}
            name='text'
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Search for Artists, Songs or Albums'
          />
          <button type='submit' onClick={submitHandler}>
            search
          </button>
        </form>
      </div>
      <div className='header__right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name || 'user name'}</h4>
      </div>
    </div>
  );
};

export default Header;
