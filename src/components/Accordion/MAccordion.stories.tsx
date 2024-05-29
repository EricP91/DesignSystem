import { Story } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import MAccordion, { MAccordionProps } from './MAccordion';

export default {
  title: 'Components/Accordion',
};

const Template: Story<MAccordionProps> = ({ header, children }) => <MAccordion header={header}>{children}</MAccordion>;

export const Single = Template.bind({});
Single.args = {
  header: (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#eee',
        height: '48px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      This is an accordion item, click on it to expand
    </Box>
  ),
  children: (
    <img
      alt="view"
      src="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      width="250"
      height="250"
    />
  ),
};
