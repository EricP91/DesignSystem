import React from 'react';

import { render, screen } from 'test-utils';

import '@testing-library/jest-dom/extend-expect';
import { StaticRangeDatePicker } from './Datepicker.stories';
import { MStaticDateRangePickerProps } from './MStaticDateRangePicker';

it('should render static date picker', () => {
  render(<StaticRangeDatePicker {...(StaticRangeDatePicker.args as MStaticDateRangePickerProps)} />);
  expect(screen.getByTestId('range-datepicker')).toBeInTheDocument();
});
