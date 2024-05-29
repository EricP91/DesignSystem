import { render, screen } from 'test-utils';
import React from 'react';
import { Default } from './TopBar.stories';
import { TopBarProps } from './TopBar';

it('should display top bar story', () => {
  render(<Default {...(Default.args as TopBarProps)} />);
  expect(screen.getByText('This is the top bar!')).toBeInTheDocument();
});
