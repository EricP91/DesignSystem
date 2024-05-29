import { IconButton, List } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import { TrashIcon } from '../../../assets/icons';
import {
  contactIdentifierEmail,
  contactIdentifierPhoneNumber,
  contactImage,
  contactName,
  contactNoImage,
} from './constants';
import ContactListItem, { ContactListItemProps } from './ContactListItem';

export default {
  title: 'Features/Contacts/ContactListItem',
};

const Template: Story<ContactListItemProps> = (args) => (
  <List>
    <ContactListItem {...args} />
  </List>
);

export const ItemAll = Template.bind({});
ItemAll.args = {
  ...contactImage,
  ...contactName,
  ...contactIdentifierEmail,
};

export const ItemLoading = Template.bind({});
ItemLoading.args = {
  ...ItemAll.args,
  isLoading: true,
};

export const ItemNoImage = Template.bind({});
ItemNoImage.args = {
  ...contactNoImage,
  defaultName: 'No name',
  defaultIdentifier: 'No identifier',
};

export const ItemImage = Template.bind({});
ItemImage.args = {
  ...contactImage,
  defaultName: 'No name',
  defaultIdentifier: 'No identifier',
};

export const ItemName = Template.bind({});
ItemName.args = {
  ...contactName,
  defaultIdentifier: 'No identifier',
};

export const ItemIdentifierEmail = Template.bind({});
ItemIdentifierEmail.args = {
  defaultName: 'No name',
  ...contactIdentifierEmail,
};

export const ItemIdentifierPhone = Template.bind({});
ItemIdentifierPhone.args = {
  defaultName: 'No name',
  ...contactIdentifierPhoneNumber,
};

export const ItemHighlight = Template.bind({});
ItemHighlight.args = {
  ...ItemAll.args,
  highlight: 'o',
};

export const ItemLabel = Template.bind({});
ItemLabel.args = {
  ...ItemAll.args,
  nameLabel: 'Name',
  identifierLabel: 'Email',
};

export const ItemAction = Template.bind({});
ItemAction.args = {
  ...ItemAll.args,
  showAction: true,
  actionElement: (
    <IconButton size="small" data-testid="action-button">
      <TrashIcon fontSize="small" />
    </IconButton>
  ),
};
