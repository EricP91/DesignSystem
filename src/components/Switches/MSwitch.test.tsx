import React from 'react';

import { render } from 'test-utils';
import MSwitch from './MSwitch';

test('should render switch', () => {
  const { container } = render(<MSwitch />);
  expect(container.getElementsByClassName('MuiSwitch-track')[0]).toHaveStyle({ backgroundColor: '#E7ECF1' });
  expect(container.getElementsByClassName('MuiSwitch-thumb')[0]).toHaveStyle({ backgroundColor: '#FFFFFF' });
});
