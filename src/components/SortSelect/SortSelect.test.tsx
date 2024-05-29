import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import { SelectSortAndOneOrderOption, SelectSortAndOrderOption } from './SortSelect.stories';
import { SortSelectProps } from './SortSelect';

it('should render sort select with expected args', () => {
  render(<SelectSortAndOrderOption {...(SelectSortAndOrderOption.args as SortSelectProps)} />);
  expect(screen.getByTestId('sort-select-label')).toHaveTextContent(SelectSortAndOrderOption?.args?.label || '');
  expect(screen.getByTestId('sort-select-button')).toHaveTextContent(
    SelectSortAndOrderOption?.args?.options?.[0].sortByText || ''
  );
  expect(screen.getByTestId('sort-select-input').getAttribute('value')).toBe(
    SelectSortAndOrderOption?.args?.options?.[0].sortByValue
  );
  expect(screen.getByTestId('sort-order-icon')).toBeInTheDocument();
});

it('should render sort select when not having a option selected', () => {
  render(
    <SelectSortAndOrderOption
      {...(SelectSortAndOrderOption.args as SortSelectProps)}
      disabled={undefined}
      sortBy={undefined}
      sortOrder={undefined}
    />
  );
  expect(screen.getByTestId('sort-select-label')).toHaveClass('notSelected');
  expect(screen.getByTestId('sort-select-container')).toHaveClass('notSelected');
});

const testSortSelectWhenClickingOnMenuOption = async (
  openMenuSelector: string,
  indexToSelect: number
): Promise<void> => {
  const onSortChangeStub = jest.fn();
  render(
    <SelectSortAndOrderOption {...(SelectSortAndOrderOption.args as SortSelectProps)} onSortChange={onSortChangeStub} />
  );
  fireEvent.click(screen.getByTestId(openMenuSelector));
  await waitFor(() => screen.getAllByTestId('sort-select-text')[indexToSelect]);
  fireEvent.click(screen.getAllByTestId('sort-select-text')[indexToSelect]);
  await waitFor(() => screen.getAllByTestId('sort-select-input'));
  expect(screen.getByTestId('sort-select-input').getAttribute('value')).toBe(
    SelectSortAndOrderOption?.args?.options?.[indexToSelect].sortByValue
  );
  expect(onSortChangeStub).toHaveBeenCalledWith(
    SelectSortAndOrderOption?.args?.options?.[indexToSelect].sortByValue,
    SelectSortAndOrderOption?.args?.sortOrder
  );
};

it('should open select menu when clicking the container button', async () => {
  await testSortSelectWhenClickingOnMenuOption('sort-select-button', 1);
});

it('should open select menu when clicking the input label', async () => {
  await testSortSelectWhenClickingOnMenuOption('sort-select-label', 2);
});

const testSortSelectNotOpeningWhenOnlyOneOption = async (): Promise<void> => {
  const onSortChangeStub = jest.fn();
  render(
    <SelectSortAndOneOrderOption
      {...(SelectSortAndOneOrderOption.args as SortSelectProps)}
      onSortChange={onSortChangeStub}
    />
  );
  fireEvent.click(screen.getByTestId('sort-select-button'));
  expect(screen.queryByTestId('sort-select-text')).toBeNull();
};

it('should not open the select menu when clicking the container button if there is only one option available', async () => {
  await testSortSelectNotOpeningWhenOnlyOneOption();
});

const testSortOrderWhenTogglingOnIconButton = async (expectedOrder: 'asc' | 'desc'): Promise<void> => {
  fireEvent.click(screen.getByTestId('sort-order-icon'));
  await waitFor(() => screen.getByTestId('sort-order-icon'));
  expect(screen.getByTestId('sort-order-icon')).toHaveClass(expectedOrder);
};

it('should apply the expected class when clicking the order icon', async () => {
  render(<SelectSortAndOrderOption {...(SelectSortAndOrderOption.args as SortSelectProps)} />);
  await testSortOrderWhenTogglingOnIconButton('asc');
  await testSortOrderWhenTogglingOnIconButton('desc');
});
