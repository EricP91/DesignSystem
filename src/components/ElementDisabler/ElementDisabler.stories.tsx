import { Story } from '@storybook/react';
import React from 'react';
import ElementDisabler, { ElementDisablerProps } from './ElementDisabler';

export default {
  title: 'Components/ElementDisabler',
};

const Template: Story<ElementDisablerProps> = (args) => (
  <div>
    <ElementDisabler {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div>DIV</div>
      <button type="button">Click me</button>
    </>
  ),
  disabled: true,
  tooltipTitle: 'disabled elements',
};
