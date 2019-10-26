import React, { Component } from 'react';
import './assets/css/fonts.css';
import SearchBar from './components/searchbar/searchBar';

class App extends Component {
  render() {
    const localization = 'nl_NL';

    return (
      <div className='pageWrapper'>
        <SearchBar locale={localization} />
      </div>
    );
  }
}

export default App;
