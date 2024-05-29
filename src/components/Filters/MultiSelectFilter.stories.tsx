import { Story } from '@storybook/react';
import React from 'react';

import { IncomingCallIcon, MissedCallIcon, OutgoingCallIcon, QuestionMarkCallIcon } from '../../assets/icons';
import MultiSelectFilter, { MultiSelectFilterProps } from './MultiSelectFilter';

export default {
  title: 'Components/Filters',
};

const Template: Story<MultiSelectFilterProps> = (args) => <MultiSelectFilter {...args} />;

export const MultiSelectDisabled = Template.bind({});
MultiSelectDisabled.args = {
  filterName: 'Tags',
  resultsText: 'tags',
  items: [],
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  filterName: 'Apps',
  primaryButtonText: 'Apply',
  secondaryButtonText: 'Cancel',
  alertMessage: {
    severity: 'error',
    text: 'Some values are not applicable',
  },
  // eslint-disable-next-line no-console
  onApply: (state) => console.log(state),
  items: [
    {
      id: 'App1',
      value: 'This is a very very very long App Name',
      count: 5,
      totalCount: 10,
      selected: true,
      icon: <IncomingCallIcon />,
    },
    {
      id: 'App2',
      value: 'App2',
      count: 5,
      selected: false,
      icon: <MissedCallIcon />,
    },
    {
      id: 'App3',
      value: 'App3',
      count: 5,
      totalCount: 20,
      selected: false,
      icon: <OutgoingCallIcon />,
    },
    {
      id: 'App4',
      value: 'App4',
      count: 10,
      selected: false,
      icon: <QuestionMarkCallIcon />,
    },
    {
      id: 'App5',
      value: 'Custom App Render',
      count: 13,
      totalCount: 30,
      renderer: <span style={{ color: 'red' }}>Custom App Render</span>,
      selected: true,
    },
    {
      id: 'App6',
      value: 'App with equal counts',
      count: 99,
      totalCount: 99,
      selected: false,
    },
    {
      id: 'App7',
      value: 'App with zero count',
      count: 0,
      totalCount: 8,
      selected: false,
    },
    {
      id: 'App8',
      value: 'App with undefined count',
      selected: false,
    },
  ],
};

export const MultiSelectClean = Template.bind({});
MultiSelectClean.args = {
  ...MultiSelect.args,
  items: [
    {
      id: 'App1',
      value: 'This is a very very very long App Name',
      count: 5,
      totalCount: 10,
      selected: false,
      icon: <IncomingCallIcon />,
    },
    {
      id: 'App2',
      value: 'App2',
      count: 5,
      selected: false,
      icon: <MissedCallIcon />,
    },
    {
      id: 'App3',
      value: 'App3',
      count: 5,
      totalCount: 20,
      selected: false,
      icon: <OutgoingCallIcon />,
    },
    {
      id: 'App4',
      value: 'App4',
      count: 10,
      selected: false,
      icon: <QuestionMarkCallIcon />,
    },
    {
      id: 'App5',
      value: 'Custom App Render',
      count: 13,
      totalCount: 30,
      renderer: <span style={{ color: 'red' }}>Custom App Render</span>,
      selected: false,
    },
    {
      id: 'App6',
      value: 'App with equal counts',
      count: 99,
      totalCount: 99,
      selected: false,
    },
    {
      id: 'App7',
      value: 'App with zero count',
      count: 0,
      totalCount: 8,
      selected: false,
    },
    {
      id: 'App8',
      value: 'App with undefined count',
      selected: false,
    },
  ],
};
