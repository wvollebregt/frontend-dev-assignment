import React from 'react';
import './searchBar.css';
import localizedCopy from '../../assets/copy';

function SearchBar() {
  return (
    <div className="searchBar">
      <form action="" className="searchBar__form" data-at="SearchForm">
        <input className="searchBar__input" type="text" name="searchInput" placeholder={localizedCopy.search.nl_NL}></input>
        <button className="searchBar__button"></button>
      </form>
    </div>
  );
}
  
export default SearchBar;
