import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { ToggleCheckBoxFilterProps } from './ToggleCheckBoxFilter';
import { ToggleFilter } from './ToggleCheckBoxFilter.stories';

it('should render toggle filter story', () => {
  const args: ToggleCheckBoxFilterProps = ToggleFilter.args as ToggleCheckBoxFilterProps;
  render(<ToggleFilter {...args} />);
  expect(screen.getByRole('button')).toHaveTextContent(args.filterName);
});

it('should call on apply callback properly', () => {
  const spy = jest.spyOn(console, 'log');
  const args: ToggleCheckBoxFilterProps = ToggleFilter.args as ToggleCheckBoxFilterProps;
  args.onApply(false);
  expect(spy).toBeCalledWith(false);
});
