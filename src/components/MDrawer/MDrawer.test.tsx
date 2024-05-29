import { render, screen, fireEvent } from 'test-utils';
import React from 'react';
import { MDrawer } from '../index';
import { MDrawerProps } from './MDrawer';

const MDrawerWrapper = ({ drawerWidth = 300 }: Partial<MDrawerProps>): JSX.Element => (
  <MDrawer drawerWidth={drawerWidth}>
    <span>test</span>
  </MDrawer>
);

it('should only show drawer content onclick', () => {
  render(<MDrawerWrapper />);
  fireEvent.click(screen.getByTestId('toggle-icon'));
  expect(screen.getByText('test')).not.toHaveStyle({ visibility: 'hidden' });
});

it('should not open drawer by default', () => {
  render(<MDrawerWrapper />);
  expect(screen.getByTestId('toggle-icon')).toBeInTheDocument();
  expect(screen.getByText('test')).toHaveStyle({ visibility: 'hidden' });
});

it('should have toggle icon not rotated when drawer closed', () => {
  render(<MDrawerWrapper />);
  expect(screen.getByTestId('toggle-icon')).toHaveStyle({ transform: 'rotate(0deg)' });
});
it('should have toggle icon rotated 180deg when drawer opened', () => {
  render(<MDrawerWrapper />);
  fireEvent.click(screen.getByTestId('toggle-icon'));
  expect(screen.getByTestId('toggle-icon')).toHaveStyle({ transform: 'rotate(180deg)' });
});

it('should have leave transition when opened', () => {
  render(<MDrawerWrapper />);
  fireEvent.click(screen.getByTestId('toggle-icon'));
  expect(screen.getByTestId('toggle-icon').parentElement).toHaveStyle({
    transition: 'transform 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  });
});

it('should have open transition when closed', () => {
  render(<MDrawerWrapper />);
  expect(screen.getByTestId('toggle-icon').parentElement).toHaveStyle({
    transition: 'transform 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
  });
});
