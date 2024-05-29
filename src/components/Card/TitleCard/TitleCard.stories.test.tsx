import { render, screen } from 'test-utils';
import React from 'react';
import { Default } from './TitleCard.stories';
import { TitleCardProps } from './TitleCard';

it('should display single tag', () => {
  render(<Default {...(Default.args as TitleCardProps)} />);
  expect(screen.getByText('Title card')).toBeInTheDocument();
  expect(screen.getByText('These are the children')).toBeInTheDocument();
});
