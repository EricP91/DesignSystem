import React from 'react';
import { render, screen } from 'test-utils';
import ElementDisabler from './ElementDisabler';

describe('Test ElementDisabler functionality', () => {
  it('should always render the children that gets passed', () => {
    render(
      <ElementDisabler>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ElementDisabler>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should render a tooltip, when the title is provided', () => {
    render(
      <ElementDisabler tooltipTitle="test" disabled>
        <div>test</div>
      </ElementDisabler>
    );

    expect(screen.getByTestId('tooltip-bearer')).toBeInTheDocument();
  });
});
