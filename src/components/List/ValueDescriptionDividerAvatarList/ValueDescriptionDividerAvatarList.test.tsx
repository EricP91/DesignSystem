import React from 'react';
import { render, screen } from 'test-utils';
import { capitalize } from '@mui/material';
import { CalendarCallIcon, CheckListIcon, MagnifyingGlassIcon } from '../../../assets/icons';
import ValueDescriptionDividerAvatarList from './ValueDescriptionDividerAvatarList';

test('should render ValueDescriptionDividerAvatarList', () => {
  const items = [
    {
      valueDescriptionDividerItems: [
        {
          value: '+972527255214',
          description: 'Home',
        },
        {
          value: '0527255214',
          description: 'Work',
        },
        {
          value: '0527255214',
          description: 'Other',
        },
      ],
      icon: <MagnifyingGlassIcon />,
    },
    {
      valueDescriptionDividerItems: [
        {
          value: 'awis.s@gmail.com',
          description: 'Home',
        },
        {
          value: 'awis.simmons@gmail.com',
          description: 'Work',
        },
        {
          value: 'as.s@gmail.com',
          description: 'Other',
        },
      ],
      icon: <CheckListIcon />,
    },
    {
      valueDescriptionDividerItems: [
        {
          value: 'Be’eri 49, Tel Aviv',
          description: 'Home',
        },
        {
          value: 'Petach Tikva',
          description: 'Work',
        },
      ],
      icon: <CalendarCallIcon />,
    },
  ];

  render(<ValueDescriptionDividerAvatarList valueDescriptionDividerAvatarListItems={items} />);
  const valueDescriptionDividerItems = items.flatMap((x) => x.valueDescriptionDividerItems);
  const icons = items.flatMap((x) => x.icon);
  valueDescriptionDividerItems.forEach(({ value, description }) => {
    expect(screen.queryAllByText(value)).toBeTruthy();
    expect(screen.queryAllByText(capitalize(description)).length).toBeTruthy();
  });
  expect(screen.queryAllByTestId('avatar').length).toEqual(icons.length);
});
