import React from 'react';
import { render, screen } from 'test-utils';
import VerticalOverflowTooltip from './VerticalOverflowTooltip';

describe('VerticalOverflowTooltip', () => {
  it('should render children', () => {
    render(
      <VerticalOverflowTooltip maxLines={2} title="Tooltip Title">
        <div>Child Component</div>
      </VerticalOverflowTooltip>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });

  it('should render correct styles', () => {
    render(
      <VerticalOverflowTooltip maxLines={2} title="Tooltip Title">
        <div>Child Component</div>
      </VerticalOverflowTooltip>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent.parentElement).toHaveStyle({
      overflow: 'hidden',
      display: '-webkit-box',
    });
  });
});
