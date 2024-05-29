import { render } from 'test-utils';
import React from 'react';
import { Default } from '../MDrawer/MDrawer.stories';
import { Single } from './MAccordion.stories';
import { MAccordionProps } from './MAccordion';

it('should render MAccordion story', () => {
  const story = render(<Single {...(Default.args as MAccordionProps)} />);
  expect(story).toMatchSnapshot();
});
