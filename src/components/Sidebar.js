import React from 'react';
import './Sidebar.scss';
import logo from '../assets/spotify.jpg';
import SidebarOption from './SidebarOption';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { useGlobalContext } from '../context/context';

const Sidebar = () => {
  const { playlists } = useGlobalContext();

  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src={logo} alt='spotify logo' />
      <SidebarOption Icon={HomeOutlinedIcon} title='Home' />
      <SidebarOption Icon={SearchOutlinedIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title='Your Library' />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.name} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
