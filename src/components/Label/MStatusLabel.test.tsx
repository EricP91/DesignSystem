import React from 'react';
import { render, screen } from 'test-utils';
import MStatusLabel, { StatusVariant } from './MStatusLabel';

describe('MStatusLabel', () => {
  it.each([
    ['info', '#E8F2FF'],
    ['muted', '#D4D2D2'],
    ['negative', '#FFBCB3'],
    ['negativeShady', '#F0C7A1'],
    ['positive', '#CBF5C8'],
    ['positiveSoft', '#FFD0E6'],
    ['warning', '#FFEAC0'],
  ])('should render variant %s with background color %s', (variant, color) => {
    render(<MStatusLabel variant={variant as StatusVariant}>Status</MStatusLabel>);
    expect(screen.getByText('Status')).toHaveStyle({ backgroundColor: color });
    expect(screen.getByText('Status')).toHaveStyle({ color: '#121E28' });
  });
});
