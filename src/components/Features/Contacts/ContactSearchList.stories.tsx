import { Story } from '@storybook/react';
import React from 'react';
import { contacts } from './constants';
import ContactSearchList, { ContactSearchListProps } from './ContactSearchList';

export default {
  title: 'Features/Contacts/ContactSearchList',
};

const Template: Story<ContactSearchListProps> = (args) => <ContactSearchList {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: contacts,
};

export const NoResults = Template.bind({});

NoResults.args = {
  data: [],
};

export const Custom = Template.bind({});

Custom.args = {
  data: contacts,
  defaultName: '[Undefined]',
  defaultIdentifier: '[Unidentified]',
  searchPlaceholder: 'Search contact',
  noResultsText: 'No contact results',
};
