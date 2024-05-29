import { Story } from '@storybook/react';
import React from 'react';

import ToggleCheckBoxFilter, { ToggleCheckBoxFilterProps } from './ToggleCheckBoxFilter';

export default {
  title: 'Components/Filters',
};

const Template: Story<ToggleCheckBoxFilterProps> = (args) => <ToggleCheckBoxFilter {...args} />;

export const ToggleFilterDisabled = Template.bind({});
ToggleFilterDisabled.args = {
  filterName: 'Toggle Filter CheckBox',
  tooltipTitle: 'The filter is disabled',
  disabled: true,
};

export const ToggleFilter = Template.bind({});
ToggleFilter.args = {
  filterName: 'Toggle Filter CheckBox',
  checked: true,
  checkBoxDescription: 'Toggle Filter CheckBox description',
  selectedFilterText: 'Applied',
  // eslint-disable-next-line no-console
  onApply: (state) => console.log(state),
  disabled: false,
};
