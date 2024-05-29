import React from 'react';

import { Story } from '@storybook/react';
import { Typography } from '@mui/material';
import VerticalOverflowTooltip, { VerticalOverflowTooltipProps } from './VerticalOverflowTooltip';

export default {
  title: 'Components/Tooltip/VerticalOverflowTooltip',
  argTypes: {
    title: {
      table: {
        disable: true,
      },
    },
    maxLines: { control: 'number' },
    children: { control: { disable: true } },
  },
};

const Template: Story<VerticalOverflowTooltipProps> = (args): JSX.Element => <VerticalOverflowTooltip {...args} />;

export const Default = Template.bind({});

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ut sapien sit amet fringilla. Aenean at libero quis mauris ornare dignissim. Vestibulum ante ante, eleifend ac turpis sed, tempus porttitor nisi. Quisque sollicitudin et tellus id lacinia. Sed vel euismod mi, ut euismod augue. Donec lacinia placerat felis non ultricies. Vestibulum a convallis diam. Donec non efficitur dui. Integer quis leo sit amet neque posuere facilisis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisi, gravida ac ante vel, dictum fringilla diam. Aliquam eu erat felis. Nam posuere sit amet quam ut ultricies. Vestibulum viverra, nibh lacinia congue posuere, nisi erat ultrices purus, et auctor elit dolor finibus tortor. Phasellus et elit nunc. Quisque tempus mi eget odio mollis suscipit. Morbi aliquam consectetur sodales. Sed mattis odio dolor, ut varius elit convallis in.
Pellentesque vehicula augue odio, a maximus massa venenatis nec. Vestibulum in tellus at enim dignissim consequat. Cras odio justo, hendrerit nec aliquet tempus, ullamcorper sit amet metus. Phasellus sit amet scelerisque tortor. Ut ipsum est, eleifend eu dolor quis, placerat pretium risus. Morbi finibus venenatis imperdiet. Praesent ac mi nisi. Proin elementum sollicitudin metus vitae consequat. Sed tempor, dolor eu aliquet tincidunt, libero ex interdum lacus, nec convallis lectus metus at lacus.
Pellentesque porttitor turpis et metus tempus, eget imperdiet magna dignissim. Mauris tincidunt bibendum ipsum ac pulvinar. Fusce sagittis dui turpis, vel dignissim elit dictum nec. Nulla quis odio et dolor viverra accumsan. Curabitur consequat, elit vitae blandit vestibulum, elit magna pretium augue, vel volutpat odio dui quis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean viverra molestie egestas. Donec vehicula est a consectetur convallis. Nulla facilisi. Nullam vitae velit nisl. Integer et sem condimentum, semper felis et, varius lacus. Duis ultricies bibendum leo sit amet dignissim. Proin ultrices nulla in lobortis mattis. Nam interdum, neque quis mollis fermentum, neque risus commodo tellus, ac auctor quam elit in urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
`;

Default.args = {
  title: content,
  maxLines: 3,
  children: <Typography variant="caption">{content}</Typography>,
};
