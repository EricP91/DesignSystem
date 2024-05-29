/* eslint-disable no-console */
import { Story } from '@storybook/react';
import React from 'react';
import { DownloadIcon, ViewerIcon } from '../../../assets/icons';
import { IncidentDeliverableCard, IncidentDeliverableCardProps } from './IncidentDeliverableCard';

export default {
  title: 'Features/Incident/IncidentDeliverableCard',
};

const Template: Story<IncidentDeliverableCardProps> = (args: IncidentDeliverableCardProps) => (
  <IncidentDeliverableCard {...args} />
);

export const File = Template.bind({});
File.args = {
  items: [
    {
      key: 'File Name',
      value: 'long-file-name.png',
    },
    {
      key: 'Created Date',
      value: '02/22/20',
    },
  ],
  type: 'file',
  iconsSet: [
    {
      value: <DownloadIcon />,
      tooltipText: 'Download',
      onIconClick: () => console.log('Clicked download'),
    },
    {
      value: <ViewerIcon />,
      tooltipText: 'Preview',
      onIconClick: () => console.log('Clicked view'),
    },
  ],
  isLoading: false,
};

export const Device = Template.bind({});
Device.args = {
  items: [
    {
      key: 'File Name',
      value: 'name.ufdr',
    },
    {
      key: 'Created Date',
      value: '02/22/20',
    },
  ],
  type: 'device',
  iconsSet: [
    {
      value: <DownloadIcon />,
      tooltipText: 'Download',
      onIconClick: () => console.log('Clicked download'),
    },
    {
      value: <ViewerIcon />,
      tooltipText: 'Open in Viewer',
      onIconClick: () => console.log('Clicked view'),
    },
  ],
  isLoading: false,
};
