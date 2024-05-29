import React from 'react';
import { render, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Avatar } from '@mui/material';
import AvatarBadge from './AvatarBadge';
import { CalendarCallIcon, LocationIcon } from '../../assets/icons';

test('should render avatar badges', () => {
  render(
    <AvatarBadge primaryBadgeContent={<LocationIcon />} secondaryBadgeContent={<CalendarCallIcon />}>
      <Avatar data-testid="avatar" />
    </AvatarBadge>
  );
  expect(screen.getByTestId('primary-badge')).toBeInTheDocument();
  expect(screen.getByTestId('secondary-badge')).toBeInTheDocument();
  expect(screen.getByTestId('avatar')).toBeInTheDocument();
});
