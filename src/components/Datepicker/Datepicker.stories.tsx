import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Story } from '@storybook/react';
import { Box } from '@mui/material';
import MStaticDateRangePicker, { MStaticDateRangePickerProps } from './MStaticDateRangePicker';
import { dateRangeProps } from '../Filters/FilterButton.stories.constant';

export default {
  title: 'Components/DatePickers',
};

const Template: Story<MStaticDateRangePickerProps> = (args: MStaticDateRangePickerProps) => (
  <Box data-testid="range-datepicker" sx={{ width: 626 }}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MStaticDateRangePicker {...args} />
    </LocalizationProvider>
  </Box>
);

export const StaticRangeDatePicker = Template.bind({});
StaticRangeDatePicker.args = dateRangeProps;
