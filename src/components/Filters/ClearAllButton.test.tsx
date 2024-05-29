import { render, screen } from 'test-utils';
import React from 'react';
import { ClearAllButton } from './index';

it('should render clear all button', () => {
  render(<ClearAllButton clearAllButtonText="Clear all" onClearAll={() => {}} />);
  expect(screen.getByRole('button')).toHaveTextContent('Clear all');
});
