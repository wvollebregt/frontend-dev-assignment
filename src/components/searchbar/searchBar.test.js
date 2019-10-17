import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
  });

  /*it('searchBar has placeholder text', () => {
    let el = document.getElementsByName("searchInput");
    console.log('el long', el.length);
    console.log('el type', typeof el);
    expect(el.getAttribute("placeholder").value).toEqual("Zoeken");
  });*/
});