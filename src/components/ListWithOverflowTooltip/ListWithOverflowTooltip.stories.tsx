import { Story } from '@storybook/react';
import React from 'react';
import ListWithOverflowTooltip, { ListWithOverflowTooltipProps } from './ListWithOverflowTooltip';

export default {
  title: 'Components/ListWithOverflowTooltip',
};

const Template: Story<ListWithOverflowTooltipProps<string>> = (args) => <ListWithOverflowTooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  tooltipItemRenderer: (name) => (
    <p key={name} style={{ textAlign: 'center', flex: 'none', color: 'white' }}>
      {name}
    </p>
  ),
  visibleItemRenderer: (name) => (
    <p key={name} data-testid="list-item" style={{ width: '100px', textAlign: 'center', flex: 'none' }}>
      {name}
    </p>
  ),
  data: ['Money', 'Police', 'Drugs'],
};
