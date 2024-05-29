import React from 'react';
import { render, screen } from 'test-utils';
import { capitalize } from '@mui/material';
import ValueDescriptionDividerAvatarListItem from './ValueDescriptionDividerAvatarListItem';
import { MagnifyingGlassIcon } from '../../../assets/icons';

test('should render avatar and list', () => {
  const items = [
    {
      value: 'value1',
      description: 'description1',
    },
    {
      value: 'value2',
      description: 'description2',
    },
    {
      value: 'value3',
      description: 'description3',
    },
  ];

  render(<ValueDescriptionDividerAvatarListItem icon={<MagnifyingGlassIcon />} valueDescriptionDividerItems={items} />);

  items.forEach(({ value, description }) => {
    expect(screen.getByText(value)).toBeInTheDocument();
    expect(screen.getByText(capitalize(description))).toBeInTheDocument();
  });
  expect(screen.getByTestId('avatar')).toBeInTheDocument();
  expect(screen.getByTestId('list-item-text')).toHaveStyle({ marginTop: 11 });
});

test('should render avatar and single item', () => {
  const items = [
    {
      value: 'value1',
      description: 'description1',
    },
  ];

  render(<ValueDescriptionDividerAvatarListItem icon={<MagnifyingGlassIcon />} valueDescriptionDividerItems={items} />);

  items.forEach(({ value, description }) => {
    expect(screen.getByText(value)).toBeInTheDocument();
    expect(screen.getByText(capitalize(description))).toBeInTheDocument();
  });
  expect(screen.getByTestId('avatar')).toBeInTheDocument();
  expect(screen.getByTestId('list-item-text')).toHaveStyle({ alignItems: 'center' });
});
