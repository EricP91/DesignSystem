import React from 'react';
import { render, screen } from 'test-utils';
import { ValueDescriptionDividerProps } from './ValueDescriptionDivider';
import { Default } from './ValueDescriptionDivider.stories';

test('should render value description story', () => {
  render(<Default {...(Default.args as ValueDescriptionDividerProps)} />);

  expect(screen.getByText('+972527255214')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
});
