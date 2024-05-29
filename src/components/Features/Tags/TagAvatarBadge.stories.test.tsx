import { act, fireEvent, render, screen } from 'test-utils';
import React from 'react';
import { Multiple, Single } from './TagAvatarBadge.stories';
import { TagAvatarBadgeProps } from './TagAvatarBadge';

it('should display single tag', () => {
  const { tags } = Single.args as TagAvatarBadgeProps;
  render(<Single {...(Single.args as TagAvatarBadgeProps)} />);
  expect(screen.getByText('1')).toBeInTheDocument();
  act(() => {
    fireEvent.click(screen.getByTestId('icon-avatar-badge-box'));
  });
  expect(screen.getByText(tags[0].name)).toBeInTheDocument();
});

it('should display multiple tags', () => {
  const { tags } = Multiple.args as TagAvatarBadgeProps;
  render(<Multiple {...(Multiple.args as TagAvatarBadgeProps)} />);
  expect(screen.getByText('5')).toBeInTheDocument();
  act(() => {
    fireEvent.click(screen.getByTestId('icon-avatar-badge-box'));
  });
  expect(screen.getByText(tags[0].name)).toBeInTheDocument();
  expect(screen.getByText(tags[1].name)).toBeInTheDocument();
  expect(screen.getByText(tags[2].name)).toBeInTheDocument();
  expect(screen.getByText(tags[3].name)).toBeInTheDocument();
  expect(screen.getByText(tags[4].name)).toBeInTheDocument();
});
