import { Story } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import LocationCard, { LocationCardProps } from './LocationCard';

export default {
  title: 'Features/Locations/LocationCard',
};

const ICON = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="pin-icon">
    <path
      d="M28 13.2727C28 22.8182 16 31 16 31C16 31 4 22.8182 4 13.2727C4 10.0178 5.26428 6.89618 7.51472 4.5946C9.76515 2.29302 12.8174 1 16 1C19.1826 1 22.2348 2.29302 24.4853 4.5946C26.7357 6.89618 28 10.0178 28 13.2727Z"
      fill="#43A047"
      stroke="#2F702D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.1874 7H11.8126C9.16007 7 7 9.24409 7 12C7 14.7559 9.16 17 11.8126 17H20.1874C22.8399 17 25 14.7559 25 12C25.0001 9.24416 22.8401 7 20.1877 7H20.1874ZM11.5474 13.6339C10.6757 13.6339 9.97474 12.9055 9.97474 12C9.97474 11.0945 10.6758 10.3661 11.5474 10.3661C12.419 10.3661 13.12 11.0945 13.12 12C13.12 12.9055 12.419 13.6339 11.5474 13.6339ZM16 13.6339C15.1284 13.6339 14.4274 12.9055 14.4274 12C14.4274 11.0945 15.1284 10.3661 16 10.3661C16.8716 10.3661 17.5726 11.0945 17.5726 12C17.5726 12.9055 16.8716 13.6339 16 13.6339ZM20.4526 13.6339C19.581 13.6339 18.88 12.9055 18.88 12C18.88 11.0945 19.581 10.3661 20.4526 10.3661C21.3243 10.3661 22.0253 11.0945 22.0253 12C22.0251 12.9056 21.3241 13.6339 20.4526 13.6339Z"
      fill="white"
    />
  </svg>
);

const Template: Story<LocationCardProps> = (args) => <LocationCard {...args} />;
const TemplateWithMockContainer: Story<LocationCardProps> = (args) => (
  <Box
    sx={{
      width: 322,
      borderRadius: '8px',
      padding: '8px',
      bgcolor: 'white',
      boxShadow: '0 16px 32px -4px #919EAB',
    }}
  >
    <LocationCard {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  timestamp: '14/12/2021, 6:08 PM (UTC)',
  address: '25 Pottstown Pike, Exton, Pennsylvania, USA',
  icon: ICON,
};

export const WithMockContainer = TemplateWithMockContainer.bind({});
WithMockContainer.args = {
  timestamp: '14/12/2021, 6:08 PM (UTC)',
  address: '25 Pottstown Pike, Exton, Pennsylvania, USA',
  icon: ICON,
};
