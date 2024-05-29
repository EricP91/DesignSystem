import { render, screen } from 'test-utils';
import React from 'react';
import { Typography } from '@mui/material';
import { TagIcon } from '../../assets/icons';
import TagList from '../Features/Tags/TagList';
import IconAvatarBadge from './IconAvatarBadge';
import { ThemeConfig } from '../../theme';

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

const icon = <TagIcon />;
const list = <TagList tags={tags} />;

it('should display item avatar with badge', () => {
  const listWithOneItem = (
    <Typography component="span" display="inline" variant="body2">
      temp-name
    </Typography>
  );

  render(
    <ThemeConfig isLightMode>
      <IconAvatarBadge icon={icon} list={listWithOneItem} badgeContent={1} />
    </ThemeConfig>
  );

  expect(screen.getByTestId('icon-avatar-badge-box'));
});

it('should display number of items', () => {
  render(
    <ThemeConfig isLightMode>
      <IconAvatarBadge icon={icon} list={list} badgeContent={5} />
    </ThemeConfig>
  );

  expect(screen.getByText(5));
});
