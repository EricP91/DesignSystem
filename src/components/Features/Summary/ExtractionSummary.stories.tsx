import React from 'react';
import { Story } from '@storybook/react';
import { ExtractionSummary, ExtractionSummaryProps } from './ExtractionSummary';

export default {
  title: 'Features/Summary/ExtractionSummary',
};

const Template = (args: ExtractionSummaryProps): JSX.Element => <ExtractionSummary {...args} />;

export const Default: Story<ExtractionSummaryProps> = Template.bind({});
Default.args = {
  data: [
    {
      name: 'chats',
      count: 40,
      route: '',
      disabled: false,
    },
    {
      name: 'calls',
      count: '10,200',
      route: '',
      disabled: false,
    },
    {
      name: 'webHistory',
      count: 0,
      route: '',
      disabled: false,
    },
    {
      name: 'mediaItems',
      count: '11,111',
      route: '',
      disabled: false,
    },
  ],
  evidenceDetails: {
    incidentId: '',
    deviceName: '',
    ufdrName: '',
  },
  isLoading: false,
};
