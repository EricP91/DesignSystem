import React from 'react';

import { render, screen } from 'test-utils';

import '@testing-library/jest-dom/extend-expect';
import { MultiLineTextField, OutlinedTextField } from './Input.stories';

it('should render outlined text field', () => {
  render(<OutlinedTextField {...OutlinedTextField.args} />);
  expect(screen.getByDisplayValue('Default Value')).toBeTruthy();
});

it('should render multiline text field', () => {
  render(<MultiLineTextField {...MultiLineTextField.args} />);
  expect(screen.getByDisplayValue('Default Value'));
});
