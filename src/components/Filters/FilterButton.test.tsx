import { fireEvent, render, screen } from 'test-utils';
import React from 'react';
import FilterButton from './FilterButton';

it('should render correct button text when filter is selected', () => {
  render(<FilterButton filterName="Apps" selectedFilterText="3 selected" />);
  expect(screen.getByRole('button')).toHaveTextContent('Apps: 3 selected');
});

it('should have open class when clicking on filter', () => {
  const { container } = render(<FilterButton filterName="Apps" />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(container.querySelector('.open')).toBeTruthy();
});

it('should not have open class when clicking on filter', () => {
  const { container } = render(<FilterButton filterName="Apps" />);
  expect(container.querySelector('.open')).toBeFalsy();
});

it('should have active class when isActive is true', () => {
  const { container } = render(<FilterButton filterName="Apps" isActive />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(container.querySelector('.active')).toBeTruthy();
});

it('should not have active class when isActive is false', () => {
  const { container } = render(<FilterButton filterName="Apps" />);
  expect(container.querySelector('.active')).toBeFalsy();
});
