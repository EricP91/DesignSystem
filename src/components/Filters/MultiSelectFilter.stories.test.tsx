import React from 'react';

import { render, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import { MultiSelectFilterProps } from './MultiSelectFilter';
import { MultiSelect } from './MultiSelectFilter.stories';

it('should render multi select filter story', () => {
  const args: MultiSelectFilterProps = MultiSelect.args as MultiSelectFilterProps;
  render(<MultiSelect {...args} />);
  expect(screen.getByRole('button')).toHaveTextContent(args.filterName);
});

it('should call on apply callback properly', () => {
  const spy = jest.spyOn(console, 'log');
  const args: MultiSelectFilterProps = MultiSelect.args as MultiSelectFilterProps;
  const state = args.items.reduce((acc, item) => ({ ...acc, [item.id]: item.selected }), {});
  args.onApply(state);
  expect(spy).toBeCalledWith(state);
});
