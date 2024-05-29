import { Story } from '@storybook/react';
import React from 'react';
import {
  contactIdentifierEmail,
  contactIdentifierWithName,
  contactIdentifierPhoneNumber,
  contactImage,
  contactName,
  contactNoImage,
  unidentifiedContact,
} from './constants';
import ContactAvatar, { ContactAvatarProps } from './ContactAvatar';

export default {
  title: 'Features/Contacts/ContactAvatar',
};

const Template: Story<ContactAvatarProps> = (args) => <ContactAvatar {...args} />;

export const AvatarNoImage = Template.bind({});
AvatarNoImage.args = {
  size: 'medium',
  ...contactNoImage,
};

export const AvatarImage = Template.bind({});
AvatarImage.args = {
  size: 'medium',
  ...contactImage,
};

export const AvatarName = Template.bind({});
AvatarName.args = {
  size: 'medium',
  ...contactName,
};

export const AvatarIdentifierEmail = Template.bind({});
AvatarIdentifierEmail.args = {
  size: 'medium',
  ...contactIdentifierEmail,
};

export const AvatarIdentifierAndName = Template.bind({});
AvatarIdentifierAndName.args = {
  size: 'medium',
  ...contactIdentifierWithName,
};

export const AvatarIdentifierPhone = Template.bind({});
AvatarIdentifierPhone.args = {
  size: 'medium',
  ...contactIdentifierPhoneNumber,
};

export const UnidentifiedAvatar = Template.bind({});
UnidentifiedAvatar.args = {
  ...unidentifiedContact,
  isUnidentified: true,
};
