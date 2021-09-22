import React from 'react';
import SearchBar from '../searchbar/Searchbar';
import icon from '../../assets/icon.ico'
import './Navbar.css';

function Nav({onSearch}) {
  return (
    <div className="navbar">
      <div className="navbarContent">
        <img src={icon} alt='' className="navbarIcon"/>
        <h1 className='navbarTitle'>Weather App</h1>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
