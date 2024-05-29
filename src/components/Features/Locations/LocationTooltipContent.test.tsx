import { render, screen } from 'test-utils';
import React from 'react';
import { Default } from './LocationTooltipContent.stories';
import { LocationTooltipContentProps } from './LocationTooltipContent';

describe('LocationTooltipContent', () => {
  it('should display the given placeName and address', () => {
    const { address, placeName } = Default.args as LocationTooltipContentProps;
    render(<Default {...(Default.args as LocationTooltipContentProps)} />);

    expect(screen.getByText(placeName)).toBeInTheDocument();
    expect(screen.getByText(address)).toBeInTheDocument();
  });
});
