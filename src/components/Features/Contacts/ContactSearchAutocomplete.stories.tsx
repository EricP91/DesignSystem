import { Story } from '@storybook/react';
import React from 'react';
import { contacts } from './constants';
import ContactSearchAutocomplete, { ContactSearchAutocompleteProps } from './ContactSearchAutocomplete';

export default {
  title: 'Features/Contacts/ContactSearchAutocomplete',
};

const Template: Story<ContactSearchAutocompleteProps> = (args) => <ContactSearchAutocomplete {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: contacts,
  onSelect: () => {},
};

export const Custom = Template.bind({});

Custom.args = {
  data: contacts,
  defaultName: '[Undefined]',
  defaultIdentifier: '[Unidentified]',
  searchPlaceholder: 'Search contact',
  onSelect: (item) => {
    // eslint-disable-next-line no-console
    console.log(`Selected item ${item.id}`);
  },
};
