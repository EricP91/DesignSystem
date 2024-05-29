import { Story } from '@storybook/react';
import React from 'react';
import ColorSelector, { ColorSelectorProps } from './ColorSelector';

export default {
  title: 'Components/ColorSelector',
};

const Template: Story<ColorSelectorProps> = (args) => <ColorSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSelected: (color: string) => color,
  colors: [
    '#9B7EEF',
    '#E97BA9',
    '#F39C6B',
    '#56445D',
    '#C5E99B',
    '#7FDBDB',
    '#44AF69',
    '#DBC17F',
    '#54F2F2',
    '#5B869F',
    '#B59890',
    '#363457',
    '#98A886',
    '#735290',
    '#9ACAE7',
    '#EDAEF8',
    '#BF98A0',
    '#638475',
    '#90E39A',
    '#F6D0B1',
  ],
};
