import React from 'react';
import { render, screen } from 'test-utils';
import { CalendarCallIcon, CheckListIcon, MagnifyingGlassIcon } from '../../../assets/icons';
import ValueDescriptionDividerAvatarListCard from './ValueDescriptionDividerAvatarListCard';

const items = {
  valueDescriptionDividerAvatarListItems: [
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
  ],
};

test('should render title and list', () => {
  render(<ValueDescriptionDividerAvatarListCard title="testTitle" valueDescriptionDividerAvatarList={items} />);
  const valueDescriptionDividerItems = items.valueDescriptionDividerAvatarListItems.flatMap(
    (x) => x.valueDescriptionDividerItems
  );
  const icons = items.valueDescriptionDividerAvatarListItems.flatMap((x) => x.icon);
  valueDescriptionDividerItems.forEach(({ value, description }) => {
    expect(screen.queryAllByText(value)).toBeTruthy();
    expect(screen.queryAllByText(description).length).toBeTruthy();
  });
  expect(screen.queryAllByTestId('avatar').length).toEqual(icons.length);
  expect(screen.getByText('TestTitle')).toBeInTheDocument();
});

test('should highlight correctly', () => {
  const highlightedText = items.valueDescriptionDividerAvatarListItems[1].valueDescriptionDividerItems[0].value;
  render(
    <ValueDescriptionDividerAvatarListCard
      title="testTitle"
      valueDescriptionDividerAvatarList={items}
      highlight={highlightedText}
    />
  );
  expect(screen.getByText(highlightedText)).toHaveStyle('background-color: rgb(255, 225, 106)');
});
