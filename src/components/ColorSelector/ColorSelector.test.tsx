import { render, screen } from 'test-utils';
import React from 'react';
import { Default as ColorSelectorDefault } from './ColorSelector.stories';
import { ColorSelectorProps } from './ColorSelector';

describe('ColorSelector', () => {
  it('should display the color selector container and the color elements', () => {
    const { args } = ColorSelectorDefault;
    render(<ColorSelectorDefault {...(args as ColorSelectorProps)} />);
    expect(screen.queryByTestId('color-selector-wrapper')).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(screen.queryByTestId(`color-selector-${args?.colors[0]}`)).toBeInTheDocument();
  });
});
