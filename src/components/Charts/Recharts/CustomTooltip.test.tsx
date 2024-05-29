import React from 'react';
import { render, screen } from 'test-utils';
import CustomTooltip from './CustomTooltip';

describe('Custom tooltip test', () => {
  it('should render custom tooltip', () => {
    render(<CustomTooltip color="#fff" payload={[{ name: 'test', value: 555 }]} />);
    expect(screen.getByTestId('custom-tooltip-wrapper')).toBeTruthy();
    expect(screen.getAllByTestId('tooltip-label').length).toEqual(2);
  });
});
