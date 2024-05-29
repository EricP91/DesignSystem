import { render, screen } from 'test-utils';
import React from 'react';
import Notification from './Notification';
import { ThemeConfig } from '../../theme';

it('should render primary variant', () => {
  render(
    <ThemeConfig isLightMode>
      <Notification variant="primary">Primary Notification</Notification>
    </ThemeConfig>
  );
  expect(screen.getByText('Primary Notification')).toHaveStyle('background-color: rgb(255, 255, 255)');
  expect(screen.getByText('Primary Notification')).toHaveStyle('border-bottom: 2px solid #0064CC');
});

it('should render error variant', () => {
  render(
    <ThemeConfig isLightMode>
      <Notification variant="error">Error Notification</Notification>
    </ThemeConfig>
  );
  expect(screen.getByText('Error Notification')).toHaveStyle('background-color: rgb(236, 247, 240)');
  expect(screen.getByText('Error Notification')).toHaveStyle('border-bottom: 2px solid #D30813;');
});
