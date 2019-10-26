import React, { Component } from 'react';
import './searchBar.css';
import localizedCopy from '../../assets/copy';
import Button from '../button/button';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      placeholder: localizedCopy.search[this.props.locale],
      searchquery: ''
    }

    this.handleSearchBlur = this._onBlur.bind(this);
    this.handleSearchChange = this._onChange.bind(this);
    this.handleSearchFocus = this._onFocus.bind(this);
    this.handleStateChange = this.onStateChange.bind(this);
  }

  _onBlur() {
    if (this.state.focus && !this.state.searchquery.length) {
      this.setState({ focus: false });
    }
  }

  _onChange(event) {
    this.setState({ searchquery: event.target.value }, () => {
      if (this.state.searchquery.length) {
        this.setState({ focus: true });
      }
    });
  }

  _onFocus() {
    if (!this.state.focus) {
      this.setState({ focus: true });
    }
  }

  onStateChange(newFocus, newSearchQuery) {
    this.setState({ focus: newFocus, searchquery: newSearchQuery });
  }

  render() {
    let searchClassName = 'searchBar';

    if (this.state.focus) {
      searchClassName += ' searchBar--focus';
    }

    return (
      <div className={searchClassName}>
        <form action='' className='searchBar__form' data-at='SearchForm'>
          <input className='searchBar__input' 
            id='searchBarInput' 
            name='searchInput' 
            onBlur={this.handleSearchBlur} 
            onChange={this.handleSearchChange} 
            onFocus={this.handleSearchFocus} 
            placeholder={this.state.placeholder} 
            type='text' 
            value={this.state.searchquery} 
          />
          <Button 
            buttonType='submit' 
            buttonClass='searchBar__button' 
            changeState={this.handleStateChange} 
          />
          <Button 
            buttonType='reset' 
            buttonClass='searchBar__button' 
            changeState={this.handleStateChange} 
          />
        </form>
      </div>
    );
  }
}
  
export default SearchBar;
