import { Story } from '@storybook/react';
import React from 'react';
import { contacts } from './constants';
import ContactList, { ContactListProps } from './ContactList';

export default {
  title: 'Features/Contacts/ContactList',
};

const Template: Story<ContactListProps> = (args) => <ContactList {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: contacts,
};

export const Custom = Template.bind({});

Custom.args = {
  data: contacts,
  defaultName: '[Undefined]',
  defaultIdentifier: '[Unidentified]',
  showRemove: (contact) => contacts.indexOf(contact) !== 0,
  removeText: 'Remove item',
  nameLabel: () => 'Name',
  isLoading: false,
};
