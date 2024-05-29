import { Story } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import LocationTooltipContent, { LocationTooltipContentProps } from './LocationTooltipContent';

export default {
  title: 'Features/Locations/LocationTooltipContent',
};

const Template: Story<LocationTooltipContentProps> = (args) => <LocationTooltipContent {...args} />;
const TemplateWithMockContainer: Story<LocationTooltipContentProps> = (args) => (
  <Box
    sx={{
      width: 216,
      borderRadius: '8px',
      bgcolor: 'white',
      boxShadow: '0 16px 32px -4px #919EAB',
    }}
  >
    <LocationTooltipContent {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  address: '19 Staniford St, Boston MA 02114, USA',
  placeName: 'Tufts Medical Center Station',
};

export const WithMockContainer = TemplateWithMockContainer.bind({});
WithMockContainer.args = {
  address: '19 Staniford St, Boston MA 02114, USA',
  placeName: 'Tufts Medical Center Station',
};
