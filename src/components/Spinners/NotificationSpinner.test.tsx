import { render, screen, fireEvent } from 'test-utils';
import React from 'react';
import { NotificationSpinner } from './NotificationSpinner';

it('should display spinner with text and button', () => {
  render(<NotificationSpinner loadingText="Test" onActionClick={() => {}} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

it('should not call action callback if button was not clicked', () => {
  const callback = jest.fn();
  render(<NotificationSpinner loadingText="Test" onActionClick={callback} />);
  expect(callback).not.toBeCalled();
});

it('should call action callback if button was clicked', () => {
  const callback = jest.fn();
  render(<NotificationSpinner loadingText="Test" onActionClick={callback} />);
  fireEvent.click(screen.getByText('Cancel'));
  expect(callback).toBeCalled();
});

it('should display spinner with text but no button', () => {
  render(<NotificationSpinner loadingText="Test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});
