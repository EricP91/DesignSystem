import React from 'react';
import { Tooltip } from '@mui/material';
import { Story } from '@storybook/react';
import * as logos from './index';

export default {
  title: 'Guidelines/Logos',
};
const Template: Story = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const components = Object.keys(logos).map((key) => logos[key]);
  const logosWithDarkBackground = ['CellebriteLogoLight', 'GuardianLogoWithTextLight', 'CellebriteLightIconLogo'];

  return (
    <>
      {components.map(
        (Component) =>
          Component && (
            <Tooltip key={Math.random()} title={Component.displayName || Component.name}>
              <div
                style={
                  logosWithDarkBackground.includes(Component.displayName || Component.name)
                    ? { backgroundColor: '#000', margin: '0 0 10px 0' }
                    : {}
                }
              >
                <Component
                  style={Component.displayName === 'CellebriteLogoLight' ? { width: '142px', height: '32px' } : {}}
                />
              </div>
            </Tooltip>
          )
      )}
    </>
  );
};

export const Logos = Template.bind({});
