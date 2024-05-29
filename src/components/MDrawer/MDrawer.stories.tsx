import { Story } from '@storybook/react';
import React, { useRef } from 'react';
import { Box } from '@mui/material';
import MDrawer, { MDrawerProps } from './MDrawer';

export default {
  title: 'Components/Drawer',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<MDrawerProps> = (args) => {
  const ref = useRef();
  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
        background: 'url(https://img.wallpapersafari.com/desktop/1920/1080/80/77/sEl8VZ.jpg) no-repeat fixed center',
        height: '100%',
      }}
    >
      <MDrawer ref={ref} {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  drawerWidth: 280,
  children: <Box sx={{ backgroundColor: '#F1F4F6', height: '100%', textAlign: 'center', p: 2 }}>Drawer Content</Box>,
};
