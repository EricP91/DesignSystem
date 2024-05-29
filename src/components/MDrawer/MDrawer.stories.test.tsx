import { render } from 'test-utils';
import React from 'react';
import { MDrawerProps } from './MDrawer';
import { Default } from './MDrawer.stories';

it('should render MDrawer story', () => {
  const story = render(<Default {...(Default.args as MDrawerProps)} />);
  expect(story).toMatchSnapshot();
});
