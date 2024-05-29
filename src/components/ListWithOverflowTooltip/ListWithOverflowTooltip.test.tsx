import { render, screen } from 'test-utils';
import React from 'react';
import { ListWithOverflowTooltipProps } from './ListWithOverflowTooltip';
import { Default as ListWithOverflowTooltipDefault } from './ListWithOverflowTooltip.stories';

describe('ListWithOverflowTooltip', () => {
  test('should render topic chip list default', () => {
    const { args } = ListWithOverflowTooltipDefault;
    render(<ListWithOverflowTooltipDefault {...(args as ListWithOverflowTooltipProps<string>)} />);
    expect(screen.queryAllByTestId('list-item').length).toBe(3);
  });

  test('should render no list items', () => {
    const { args } = ListWithOverflowTooltipDefault;
    render(<ListWithOverflowTooltipDefault {...(args as ListWithOverflowTooltipProps<string>)} data={[]} />);
    expect(screen.queryAllByTestId('list-item').length).toBe(0);
  });
});
