import { fireEvent, render, screen } from 'test-utils';
import React from 'react';
import { OverflowTooltipProps } from './OverflowTooltip';
import { LongText, ShortText, VeryLongText } from './OverflowTooltip.stories';

it('should display tooltip when hovering over long text', () => {
  render(<LongText {...(LongText.args as OverflowTooltipProps)} />);
  fireEvent.mouseOver(screen.getByTestId('content-container'));
  expect(screen.getByText(`${LongText?.args?.title}`)).toBeInTheDocument();
});

it('should not display tooltip when hovering over short text', () => {
  render(<ShortText {...(ShortText.args as OverflowTooltipProps)} />);
  expect(screen.getByText(`${ShortText?.args?.title}`)).toBeInTheDocument();
  fireEvent.mouseOver(screen.getByTestId('content-container'));
  expect(screen.getAllByText(`${ShortText?.args?.title}`)).toHaveLength(1);
});

it('should not display tooltip when disable hover listener', async () => {
  render(<VeryLongText {...(VeryLongText.args as OverflowTooltipProps)} disableHoverListener />);
  const element = screen.getByTestId('content-container');
  fireEvent.mouseOver(element);
  expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  fireEvent.mouseLeave(element);
});
