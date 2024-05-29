import React from 'react';

import { render, screen } from 'test-utils';

import '@testing-library/jest-dom/extend-expect';
import { Default, RangeDatePickerFilter } from './FilterButton.stories';
import { FilterButtonProps } from './FilterButton';

it('should renders filter button', () => {
  render(<Default {...(Default.args as FilterButtonProps)} />);
  expect(screen.getByRole('button')).toHaveTextContent('Apps: 3 selected');
});

it('should renders range date picker filter with buttons', () => {
  render(<RangeDatePickerFilter {...(RangeDatePickerFilter.args as FilterButtonProps)} />);
  expect(screen.getByRole('button')).toHaveTextContent('Time Range');
});
