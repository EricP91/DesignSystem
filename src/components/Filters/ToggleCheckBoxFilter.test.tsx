import userEvent from '@testing-library/user-event';
import React, { Ref } from 'react';
import { fireEvent, render, screen, waitFor } from 'test-utils';

import ToggleCheckBoxFilter, { ToggleCheckBoxFilterProps } from './ToggleCheckBoxFilter';
import { ToggleFilterDisabled } from './ToggleCheckBoxFilter.stories';

const renderToggleCheckBoxFilter = (
  {
    onApply = () => {},
    filterName = 'Apps',
    checkBoxDescription = 'checkbox description',
    disabled = false,
    content = null,
  }: ToggleCheckBoxFilterProps,
  ref?: Ref<unknown>
): Promise<HTMLElement> => {
  render(
    <ToggleCheckBoxFilter
      onApply={onApply}
      checkBoxDescription={checkBoxDescription}
      filterName={filterName}
      ref={ref}
      disabled={disabled}
      content={content}
    />
  );
  const button = screen.getByRole('button');
  fireEvent.click(button);
  return waitFor(() => screen.getByTestId('toggle-filter'));
};

const toggleCheckBoxFilterDefault: ToggleCheckBoxFilterProps = {
  onApply: () => {},
  filterName: 'ToggleCheckbox',
  checkBoxDescription: 'checkbox description',
};

const toggleCheckBoxFilterDisabled: ToggleCheckBoxFilterProps = {
  ...toggleCheckBoxFilterDefault,
  disabled: true,
};

const toggleCheckBoxFilterWithContent = {
  ...toggleCheckBoxFilterDefault,
  content: <div>checkbox-content-text-test</div>,
};

it('should have apply disabled when no change was done', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDefault);
  expect(screen.getByText('Apply')).toBeDisabled();
});

it('should disable the filter button and display tooltip when disabled', async () => {
  render(<ToggleFilterDisabled {...(ToggleFilterDisabled.args as ToggleCheckBoxFilterProps)} />);
  expect(screen.getByTestId('filter-button')).toBeDisabled();
  fireEvent.mouseEnter(screen.getByTestId('filter-button'));
  await userEvent.hover(screen.getByTestId('filter-button'));
  expect(await screen.findByRole('tooltip')).toBeInTheDocument();
});

it('should have apply button enabled once a change was done', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDefault);
  fireEvent.click(screen.getByText(toggleCheckBoxFilterDefault.checkBoxDescription));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
});

it('should return applied values and close filter when pressing apply', async () => {
  const handleClick = jest.fn();
  const toggleCheckBoxFilter: ToggleCheckBoxFilterProps = {
    onApply: handleClick,
    filterName: 'ToggleCheckbox',
    checkBoxDescription: 'checkbox description',
  };

  await renderToggleCheckBoxFilter(toggleCheckBoxFilter);
  fireEvent.click(screen.getByText(toggleCheckBoxFilterDefault.checkBoxDescription));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Apply'));
  expect(handleClick).toHaveBeenCalledWith(true);
  await waitFor(() => expect(screen.getByTestId('toggle-filter').parentElement).toHaveStyle({ visibility: 'hidden' }));
});

it('should close toggle filter when clicking on cancel', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDefault);
  fireEvent.click(screen.getByText('Cancel'));
  await waitFor(() => expect(screen.getByTestId('toggle-filter').parentElement).toHaveStyle({ visibility: 'hidden' }));
});

it('should clear by reference', async () => {
  const filterRefMock = {
    current: {
      clearFilter: () => {},
    },
  };

  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDefault, filterRefMock);
  filterRefMock.current.clearFilter = jest.fn();
  await waitFor(() => {
    filterRefMock?.current?.clearFilter();
  });
});

it('should disable filter button when disabled', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDisabled);
  expect(screen.getByTestId('filter-button')).toBeDisabled();
});

it('should render toggle filter with content', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterWithContent);
  expect(screen.getByText('checkbox-content-text-test')).toBeInTheDocument();
});
