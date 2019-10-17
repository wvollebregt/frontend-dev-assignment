import React, { Component } from 'react';
import './assets/css/fonts.css';
import SearchBar from './components/searchbar/searchBar';

class App extends Component {
  render() {
    return (
      <div className="pageWrapper">
        <SearchBar/>
      </div>
    );
  }
}

export default App;
