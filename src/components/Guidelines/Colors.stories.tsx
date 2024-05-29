import { Story } from '@storybook/react';
import React from 'react';
import { useTheme, Box, Typography, Stack } from '@mui/material';
import { MTheme } from '../../theme';

export default {
  title: 'Guidelines/Colors',
};

const Template: Story = () => {
  const theme: MTheme = useTheme();
  const groups = [
    { title: 'UI', colors: theme.palette.ui },
    { title: 'Chart', colors: theme.palette.chart },
    { title: 'Topic', colors: theme.palette.topic },
    { title: 'Status', colors: theme.palette.status },
  ];
  return (
    <>
      {groups.map(({ title, colors }) => (
        <>
          <Typography sx={{ m: 2, ml: 0 }} display="block" variant="h2">
            {title}
          </Typography>
          <Stack flexDirection="row" gap={3} flexWrap="wrap">
            {Object.keys(colors).map((key) => (
              <Box>
                <Typography display="block" variant="small">
                  {key}
                </Typography>
                <Typography variant="small">{colors[key]}</Typography>
                <Box sx={{ height: 100, width: 100, backgroundColor: colors[key], borderRadius: '6px' }} />
              </Box>
            ))}
          </Stack>
        </>
      ))}
    </>
  );
};

export const Colors = Template.bind({});
