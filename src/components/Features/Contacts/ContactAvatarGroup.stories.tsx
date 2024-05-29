import { Box } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import { contacts } from './constants';
import ContactAvatarGroup, { ContactAvatarGroupProps } from './ContactAvatarGroup';

export default {
  title: 'Features/Contacts/ContactAvatarGroup',
};

const Template: Story<ContactAvatarGroupProps> = (args) => (
  <Box width={200}>
    <ContactAvatarGroup {...args} />
  </Box>
);

export const AvatarGroup = Template.bind({});
AvatarGroup.args = {
  max: contacts.length - 1,
  data: contacts,
  highlight: 'John',
  onClickViewMore: () => {
    // eslint-disable-next-line no-console
    console.log('View more');
  },
};
