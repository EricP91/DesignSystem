import { Story } from '@storybook/react';
import React from 'react';
import { DeviceExtractions, DeviceExtractionsProps } from './DeviceExtractions';

export default {
  title: 'Features/Summary/DeviceExtractions',
};

const Template = (args: DeviceExtractionsProps): JSX.Element => (
  <div style={{ width: '504px', height: '551px' }}>
    <DeviceExtractions {...args} />
  </div>
);

export const Default: Story<DeviceExtractionsProps> = Template.bind({});
Default.args = {
  extractions: [
    {
      id: 0,
      deviceName: 'Samsung SGH-i747M Galaxy S III',
      type: 'File System',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    },
    {
      id: 1,
      deviceName: 'Samsung SGH-i747M Galaxy S III',
      type: 'File System',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    },
    {
      id: 2,
      deviceName: 'Samsung SGH-i747M Galaxy S III',
      type: 'File System',
      startDate: null,
      endDate: null,
    },
  ],
  extractionText1: 'Extraction start date/time',
  extractionText2: 'Extraction end date/time',
  isLoading: false,
};
