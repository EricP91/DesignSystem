import { Story } from '@storybook/react';
import React from 'react';
import TagItemEdit, { TagItemEditProps } from './TagItemEdit';

export default {
  title: 'Features/Tags/TagItemEdit',
};

const Template: Story<TagItemEditProps> = (args) => <TagItemEdit {...args} />;

export const Default = Template.bind({});
Default.args = {
  nameLabel: 'Tag name',
  namePlaceholder: 'Add tag name...',
  errors: {
    empty: 'Empty tag name',
    duplicate: 'Duplicate tag name',
    maxLength: 'Too many tag characters',
    maxCount: 'Too many tags',
  },
  nameList: ['evidence'],
  nameMaxLength: 10,
  maxCount: 4,
  colorList: [
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
  onSave: () => {},
};

export const Update = Template.bind({});
Update.args = {
  ...Default.args,
  namePlaceholder: 'Update tag name...',
  name: 'Evidence',
  color: 'blue',
};
