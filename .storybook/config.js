import { configure } from '@storybook/react';

function loadStories() {
  require.context('../src', true, /\.stories\.js$/);
}

configure(loadStories, module);