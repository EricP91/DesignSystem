import { act, render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Multiple, Single } from './IconAvatarBadge.stories';
import { IconAvatarBadgeProps } from './IconAvatarBadge';

it('should display single avatar', () => {
  render(<Single {...(Single.args as IconAvatarBadgeProps)} />);
  expect(screen.getByText('1'));
});

it('should display multiple tags', async () => {
  render(<Multiple {...(Multiple.args as IconAvatarBadgeProps)} />);
  expect(screen.getByText('5'));
  await act(async () => {
    await userEvent.click(screen.getByTestId('avatar-icon'));
  });
  expect(screen.getByText('This is a long tag #1'));
  expect(screen.getByText('This ia tag #3'));
});
