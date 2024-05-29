import React from 'react';
import { Tooltip } from '@mui/material';
import { Story } from '@storybook/react';
import * as images from './index';

export default {
  title: 'Guidelines/Images',
};
const Template: Story = () => {
  const components = Object.keys(images).map((key) => (images as Record<string, React.FC>)[key]);

  return (
    <>
      {components.map(
        (Component) =>
          Component && (
            <Tooltip key={Math.random()} title={Component.displayName || Component.name}>
              <div>
                <Component />
              </div>
            </Tooltip>
          )
      )}
    </>
  );
};

export const Images = Template.bind({});
