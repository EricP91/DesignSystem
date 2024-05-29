import { fireEvent, render, screen } from 'test-utils';
import React from 'react';
import { ThemeConfig } from '../../../theme';
import TagAvatarBadge from './TagAvatarBadge';

it('should display tag avatar', () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
  ];
  render(
    <ThemeConfig isLightMode>
      <TagAvatarBadge tags={tags} />
    </ThemeConfig>
  );
  expect(screen.getByTestId('avatar-icon'));
});

it('should display number of tags', () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
  ];
  render(
    <ThemeConfig isLightMode>
      <TagAvatarBadge tags={tags} />
    </ThemeConfig>
  );
  expect(screen.getByText(1));
});

it('should display 3 tags name', () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
    {
      color: 'blue',
      name: 'tag2',
    },
    {
      color: 'green',
      name: 'tag3',
    },
  ];
  render(
    <ThemeConfig isLightMode>
      <TagAvatarBadge tags={tags} />
    </ThemeConfig>
  );
  fireEvent.click(screen.getByTestId('icon-avatar-badge-box'));

  expect(screen.getByText('tag1')).toBeInTheDocument();
  expect(screen.getByText('tag2')).toBeInTheDocument();
  expect(screen.getByText('tag3')).toBeInTheDocument();
});
