import { render } from 'test-utils';
import React from 'react';
import { Default, ScrollbarsProps } from './Scrollbar.stories';

it('should render without errors when provided the minimum required props', () => {
  const { container } = render(<Default {...(Default.args as ScrollbarsProps)} />);
  expect(container.querySelector('.simplebar-vertical')).toBeTruthy();
});
