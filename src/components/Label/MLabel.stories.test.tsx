import { render, screen } from 'test-utils';
import React from 'react';
import { MLabelProps } from './MLabel';
import { Default, WithIcon } from './MLabel.stories';

it('should display default label', () => {
  render(<Default {...(Default.args as MLabelProps)} />);
  const label = screen.getByText('This is a label');
  expect(label).toHaveStyle({ backgroundColor: '#274C7A' });
  expect(label).toHaveStyle({ fontSize: '0.875rem' });
});

it('should display withIcon label', () => {
  render(<WithIcon {...(WithIcon.args as MLabelProps)} />);
  const label = screen.getByText('This is a label with icon');
  expect(label).toHaveStyle({ backgroundColor: '#274C7A' });
  expect(label).toHaveStyle({ fontSize: '0.875rem' });
  expect(screen.getAllByTestId('svg')).toBeTruthy();
});
