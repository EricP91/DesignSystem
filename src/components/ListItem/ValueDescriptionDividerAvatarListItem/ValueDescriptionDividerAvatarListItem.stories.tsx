import React from 'react';
import { Story } from '@storybook/react';
import { MagnifyingGlassIcon } from '../../../assets/icons';
import ValueDescriptionDividerAvatarListItem, {
  ValueDescriptionDividerAvatarListItemProps,
} from './ValueDescriptionDividerAvatarListItem';

export default {
  title: 'Components/ListItems/ValueDescriptionDividerAvatarListItem',
};

const Template: Story<ValueDescriptionDividerAvatarListItemProps> = (args) => (
  <ValueDescriptionDividerAvatarListItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  valueDescriptionDividerItems: [
    {
      value: 'value1',
      description: 'description1',
    },
    {
      value: 'value2',
      description: 'description2',
    },
    {
      value: 'value3',
      description: 'description3',
    },
  ],
  icon: <MagnifyingGlassIcon />,
  iconTooltipText: 'test',
};
