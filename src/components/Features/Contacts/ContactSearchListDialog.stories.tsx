/* eslint-disable no-console */
import { Story } from '@storybook/react';
import React from 'react';
import InfiniteScrollFixedSizeList from '../../InfiniteScroll/InfiniteScrollFixedSizeList';
import { InfiniteScrollFixedSizeListProps } from '../../InfiniteScroll/types';
import { contactBigList, contacts, fixedSizeList, infiniteLoader, itemRenderer } from './constants';
import ContactSearchListDialog, { ContactSearchListDialogProps } from './ContactSearchListDialog';

export default {
  title: 'Features/Contacts/ContactSearchListDialog',
};

const Template: Story<ContactSearchListDialogProps> = (args) => <ContactSearchListDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: contacts,
  open: true,
  onClose: () => {},
};

export const Custom = Template.bind({});
Custom.args = {
  data: contacts,
  open: true,
  onClose: () => {
    console.log('Closed dialog');
  },
  title: 'Search contacts',
  type: 'contacts',
  searchPlaceholder: 'Search contacts...',
  noResultsText: 'No contacts found',
  defaultName: '[Undefined]',
  defaultIdentifier: '[Unidentified]',
  closeText: 'Close',
};

const dataListArgs: InfiniteScrollFixedSizeListProps = {
  resetWatchList: [],
  scrollToItemIndex: 0,
  infiniteLoader,
  itemRenderer,
  fixedSizeList,
};

export const InfiniteScroll = Template.bind({});
InfiniteScroll.args = {
  ...Custom.args,
  data: undefined,
  dataList: (
    <div style={{ height: 400 }}>
      <InfiniteScrollFixedSizeList {...dataListArgs} />
    </div>
  ),
  dataLength: contactBigList.length,
  searchQuery: 'test',
  onSearchChange: (query) => {
    console.log(`Searched for: ${query}`);
  },
};
