import { render, screen } from 'test-utils';
import React from 'react';
import { HighlightedTextVariant } from './HighlightedText.stories';
import { HighlightedTextProps } from './HighlightedText';

it('should render highlighted text', () => {
  const { container } = render(<HighlightedTextVariant {...(HighlightedTextVariant.args as HighlightedTextProps)} />);
  expect(container).toBeInTheDocument();
});

it('should render highlighted text when passing a null children', () => {
  const { container } = render(
    <HighlightedTextVariant {...HighlightedTextVariant.args}>{null}</HighlightedTextVariant>
  );
  expect(container).toBeInTheDocument();
});

it('should highlight normal characters', () => {
  const text = 'Test';
  render(<HighlightedTextVariant highlight={text}>{text}</HighlightedTextVariant>);
  expect(screen.getByText(text)).toHaveStyle({
    backgroundColor: 'yellow',
    fontWeight: 500,
  });
});

it('should highlight special characters', () => {
  const text = '+';
  render(<HighlightedTextVariant highlight={text}>{text}</HighlightedTextVariant>);
  expect(screen.getByText(text)).toHaveStyle({
    backgroundColor: 'yellow',
    fontWeight: 500,
  });
});
