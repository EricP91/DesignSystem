import React from 'react';
import { render, screen } from 'test-utils';
import TitleCard from './TitleCard';

test('should render title card', () => {
  render(<TitleCard title="testTitle">testChildren</TitleCard>);
  expect(screen.getByText('TestTitle')).toBeInTheDocument();
  expect(screen.getByText('testChildren')).toBeInTheDocument();
});
