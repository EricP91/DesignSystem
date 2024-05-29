import { render, screen } from 'test-utils';
import React from 'react';
import { InlineSpinnerProps } from './InlineSpinner';
import { Default, WithText, WithTextAndTooltip } from './InlineSpinner.stories';

it('should display inline spinner default story', () => {
  render(<Default {...(Default.args as InlineSpinnerProps)} />);
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
});

it('should display inline spinner with text story', () => {
  render(<WithText {...(WithText.args as InlineSpinnerProps)} />);
  expect(screen.getByText('Loading text...')).toBeInTheDocument();
});

it('should display inline spinner with tooltip', () => {
  render(<WithTextAndTooltip {...(WithTextAndTooltip.args as InlineSpinnerProps)} />);
  expect(screen.getByTestId('spinner-text-tooltip-icon')).toBeInTheDocument();
});
