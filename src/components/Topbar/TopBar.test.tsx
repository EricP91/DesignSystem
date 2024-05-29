import { render, screen } from 'test-utils';
import React from 'react';
import TopBar from './TopBar';

it('should display top bar', () => {
  render(<TopBar>this is the top bar!</TopBar>);
  const topBar = screen.getByText('this is the top bar!');
  expect(topBar).toHaveStyle({ backgroundColor: 'rgba(142, 158, 174)' });
});
