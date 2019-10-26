import React from 'react';
import SearchBar from './searchBar';

export default { title: 'SearchBar' };

export const withText = () => <SearchBar locale={localization} />;

export const withEmoji = () => (
  <SearchBar><span role="img" aria-label="so cool">😀 😎 👍 💯</span></SearchBar>
);
