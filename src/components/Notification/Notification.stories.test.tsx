import { render, screen } from 'test-utils';
import React from 'react';
import { NotificationProps } from './Notification';
import { Default } from './Notification.stories';
import { ThemeConfig } from '../../theme';

it('should render default story', () => {
  render(
    <ThemeConfig isLightMode>
      <Default {...(Default.args as NotificationProps)} />
    </ThemeConfig>
  );
  expect(screen.getByText('This is a notification!')).toBeInTheDocument();
});
