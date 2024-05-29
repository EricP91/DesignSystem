import { Story } from '@storybook/react';
import React from 'react';
import InlineSpinner, { InlineSpinnerProps } from './InlineSpinner';

export default {
  title: 'Components/Spinners/Inline',
};

const Template: Story<InlineSpinnerProps> = (args) => <InlineSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {};
export const WithText = Template.bind({});
WithText.args = {
  loadingText: 'Loading text...',
};

export const WithTextAndTooltip = Template.bind({});
WithTextAndTooltip.args = {
  tooltipText: 'Tooltip text',
  loadingText: 'Loading text...',
};
