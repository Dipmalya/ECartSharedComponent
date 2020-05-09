import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ThemeProvider from '../themes/ThemeProvider'

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)

const req = require.context('../stories', true, /\.stories.js$/);
function loadStories() {
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);