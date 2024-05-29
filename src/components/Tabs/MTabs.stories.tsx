import { Story } from '@storybook/react';
import React from 'react';
import MTabs, { MTabsProps } from './MTabs';
import MFolderTabs from './MFolderTabs';
import { ContactsIcon, DocumentIcon, EqualizerIcon } from '../../assets/icons';

export default {
  title: 'Components/Tabs',
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<MTabsProps> = (args) => <MTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  tabs: [
    {
      title: 'First tab',
      icon: <DocumentIcon />,
      content: <div>First tab content</div>,
    },
    {
      title: 'Second tab',
      icon: <EqualizerIcon />,
      content: <div>Second tab content</div>,
    },
    {
      title: 'Third tab',
      icon: <ContactsIcon />,
      content: <div>Third tab content</div>,
    },
  ],
};

const FolderTemplate: Story<MTabsProps> = (args) => <MFolderTabs {...args} />;

export const Folder = FolderTemplate.bind({});
Folder.args = {
  size: 'large',
  tabs: [
    {
      title: 'Folder 1',
      icon: null,
      content: (
        <MTabs
          size="medium"
          tabs={[
            { title: 'Tab 1', content: <div>Tab 1 content</div>, icon: <EqualizerIcon /> },
            { title: 'Tab 2', content: <div>Tab 2 content</div>, icon: <EqualizerIcon /> },
            { title: 'Tab 3', content: <div>Tab 3 content</div>, icon: <EqualizerIcon /> },
            { title: 'Tab 4', content: <div>Tab 4 content</div>, icon: <EqualizerIcon /> },
            { title: 'Tab 5', content: <div>Tab 5 content</div>, icon: <EqualizerIcon /> },
          ]}
        />
      ),
    },
    {
      title: 'Folder 2',
      icon: null,
      content: (
        <MTabs
          size="medium"
          tabs={[
            { title: 'Tab 1', content: <div>Tab 1 content</div>, icon: <EqualizerIcon /> },
            { title: 'Tab 2', content: <div>Tab 2 content</div>, icon: <EqualizerIcon /> },
          ]}
        />
      ),
    },
  ],
};
