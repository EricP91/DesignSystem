import '../src/assets/fonts/index.css';
import 'simplebar/src/simplebar.css';
import { ThemeConfig } from '../src';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import NotistackProvider from '../src/providers/NotistackProvider';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'storybook-addon-designs/register';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Guidelines'],
    },
  },
};
export const decorators = [
  (Story) => (
    <ThemeConfig isLightMode>
      <NotistackProvider>
        <Router>
          <Story />
        </Router>
      </NotistackProvider>
    </ThemeConfig>
  ),
];
