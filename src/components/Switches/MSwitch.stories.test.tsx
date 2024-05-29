import { MFormControlLabelProps } from 'components/Forms/MFormControlLabel/MFormControlLabel';
import React from 'react';

import { render } from 'test-utils';
import { Default } from './MSwitch.stories';

test('should render MSwitch story', () => {
  const story = render(<Default {...(Default.args as MFormControlLabelProps)} />);
  expect(story).toMatchSnapshot();
});
