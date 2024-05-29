import { Story } from '@storybook/react';
import React from 'react';
import { DownloadIcon, ViewerIcon } from '../../../assets/icons';
import IncidentDeliverableList, { IncidentDeliverableListProps } from './IncidentDeliverableList';

export default {
  title: 'Features/Incident/IncidentDeliverableList',
};

const Template: Story<IncidentDeliverableListProps> = (args: IncidentDeliverableListProps) => (
  <IncidentDeliverableList {...args} />
);

const noop = (): void => {};

export const List = Template.bind({});
List.args = {
  itemsType: 'Deliverable files',
  listItems: [
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'file',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'file',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'file',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'file',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
    {
      items: [
        {
          key: 'File Name',
          value: 'name.png',
        },
        {
          key: 'File Name',
          value: 'name.ouf',
        },
      ],
      icons: [
        {
          value: <ViewerIcon />,
          tooltipText: 'Open in Viewer',
          onIconClick: noop,
        },
        {
          value: <DownloadIcon />,
          tooltipText: 'Download',
          onIconClick: noop,
        },
      ],
      type: 'device',
    },
  ],
  isLoading: false,
  error: '',
};
