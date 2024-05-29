import React from 'react';

import { render, screen } from 'test-utils';

import '@testing-library/jest-dom/extend-expect';
import { ContainedButton, TextButton } from './Button.stories';

it('should renders contained button', () => {
  render(<ContainedButton {...ContainedButton.args}>Content</ContainedButton>);
  expect(screen.getByRole('button')).toHaveTextContent('Content');
});

it('should render text button', () => {
  render(<TextButton {...TextButton.args}>Content</TextButton>);
  expect(screen.getByRole('button')).toHaveTextContent('Content');
});
