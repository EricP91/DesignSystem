import { Story } from '@storybook/react';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import MButton from '../Button/MButton';
import MStaticDateRangePicker from '../Datepicker/MStaticDateRangePicker';
import FilterButton, { FilterButtonProps } from './FilterButton';
import { dateRangeProps } from './FilterButton.stories.constant';

export default {
  title: 'Components/Filters',
};

const Template: Story<FilterButtonProps> = (args) => <FilterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  filterName: 'Apps',
  selectedFilterText: '3 selected',
  isActive: true,
  filterNameSuffix: ':',
  children: 'Filter component',
};

export const RangeDatePickerFilter = Template.bind({});
RangeDatePickerFilter.args = {
  filterName: 'Time Range',
  selectedFilterText: '',
  children: (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MStaticDateRangePicker {...dateRangeProps}>
        <MButton size="small" variant="contained" color="primary">
          Apply
        </MButton>
        <MButton size="small" variant="outlined" color="primary">
          Cancel
        </MButton>
      </MStaticDateRangePicker>
    </LocalizationProvider>
  ),
  filterNameSuffix: '',
};
