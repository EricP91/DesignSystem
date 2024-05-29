import { render, screen, fireEvent, waitFor } from 'test-utils';
import React from 'react';
import InlineSpinner from './InlineSpinner';

it('should display spinner with text and tooltip', () => {
  render(<InlineSpinner loadingText="this is loading..." tooltipText="this is tooltip info" />);
  expect(screen.getByText('this is loading...')).toBeInTheDocument();
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
  expect(screen.getByTestId('spinner-text-tooltip-icon')).toBeInTheDocument();
});

it('should display tooltip text on hover', () => {
  render(<InlineSpinner loadingText="this is loading..." tooltipText="this is tooltip info" />);
  fireEvent.mouseOver(screen.getByTestId('spinner-text-tooltip-icon'));
  waitFor(() => expect(screen.findByText('this is tooltip info')).toBeInTheDocument());
});
