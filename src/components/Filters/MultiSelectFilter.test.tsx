import userEvent from '@testing-library/user-event';
import React, { Ref } from 'react';
import { fireEvent, render, screen, waitFor } from 'test-utils';

import MultiSelectFilter, { MultiSelectFilterProps } from './MultiSelectFilter';
import { MultiSelectDisabled } from './MultiSelectFilter.stories';

const renderMultiSelectFilter = (
  { items, onApply = () => {}, filterName = 'Apps', alertMessage }: MultiSelectFilterProps,
  ref?: Ref<unknown>
): Promise<HTMLElement> => {
  render(
    <MultiSelectFilter onApply={onApply} alertMessage={alertMessage} items={items} filterName={filterName} ref={ref} />
  );
  const button = screen.getByRole('button');
  fireEvent.click(button);
  return waitFor(() => screen.getByTestId('multiselect-filter'));
};

it('should disable the filter button and display tooltip when there are no items', async () => {
  render(<MultiSelectDisabled {...(MultiSelectDisabled.args as MultiSelectFilterProps)} />);
  expect(screen.getByTestId('filter-button')).toBeDisabled();
  fireEvent.mouseEnter(screen.getByTestId('filter-button'));
  await userEvent.hover(screen.getByTestId('filter-button'));
  expect(await screen.findByRole('tooltip')).toBeInTheDocument();
});

it('should have apply disabled when no change was done', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [
      { id: 'App1', value: 'App1' },
      { id: '', value: 'Undefined ID' },
    ],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  expect(screen.getByText('Apply')).toBeDisabled();
});

it('should have apply button enabled once a change was done', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply')).toBeEnabled());
});

it('should have apply button disabled when a change was done and then undone', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply')).toBeDisabled());
});

it('should have apply button disabled when a change was done and then undone for an already selected item', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [
      { id: 'App1', value: 'App1' },
      { id: 'App2', value: 'App2', selected: true },
    ],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App2'));
  fireEvent.click(screen.getByText('App2'));
  await waitFor(() => expect(screen.getByText('Apply')).toBeDisabled());
});

it('should return applied values and close filter when pressing apply', async () => {
  const handleClick = jest.fn();
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: handleClick,
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Apply'));
  expect(handleClick).toHaveBeenCalledWith({ App1: true });
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
});

it('should close multi select filter when clicking cancel', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('Cancel'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
});

it('should restore values before change when clicking cancel', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Cancel'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
  fireEvent.click(screen.getByText('Apps'));
  expect(screen.getByRole('checkbox')).not.toBeChecked();
});

it('should apply new values when clicking apply', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Apply'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
  fireEvent.click(screen.getByText('Apps:'));
  expect(screen.getByRole('checkbox')).toBeChecked();
});

it('should have item name when a single item is selected and filter is closed', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  fireEvent.click(screen.getByText('Apply'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
  expect(screen.getByTestId('filter-button')).toHaveTextContent('Apps: App1');
});

it('should have nth Selected when a multiple item are selected and filter is closed', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [
      { id: 'App1', value: 'App1' },
      { id: 'App2', value: 'App2' },
    ],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  fireEvent.click(screen.getByText('App2'));
  fireEvent.click(screen.getByText('Apply'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
  expect(screen.getByTestId('filter-button')).toHaveTextContent('Apps: 2 Selected');
});

it('should have X/Y Selected when a multiple item are selected and filter is opened', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [
      { id: 'App1', value: 'App1' },
      { id: 'App2', value: 'App2' },
    ],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  fireEvent.click(screen.getByText('App2'));

  expect(screen.getByTestId('filter-button')).toHaveTextContent('Apps: (2/2)');
});

it('should have X/Y Selected when no items are selected and filter is opened', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [
      { id: 'App1', value: 'App1' },
      { id: 'App2', value: 'App2' },
    ],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);

  expect(screen.getByTestId('filter-button')).toHaveTextContent('Apps: (0/2)');
});

it('should disable filter button when no item exists', async () => {
  render(<MultiSelectFilter dataTestId="multiselect-filter" onApply={() => {}} items={[]} filterName="Apps" />);
  expect(screen.getByTestId('filter-button')).toBeDisabled();
});

describe('should clear', () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [
      { id: 'App1', value: 'App1', selected: true },
      { id: 'App2', value: 'App2', selected: false },
    ],
    onApply: () => {},
    filterName: 'Apps',
  };

  it('by button', async () => {
    await renderMultiSelectFilter(multiSelectFilter);
    fireEvent.click(screen.getByTestId('clear-button'));
  });

  it('should reference', async () => {
    const filterRefMock = {
      current: {
        clearFilter: jest.fn(),
      },
    };

    await renderMultiSelectFilter(multiSelectFilter, filterRefMock);
    await waitFor(() => {
      filterRefMock?.current?.clearFilter();
    });
  });
});

describe('should search', () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [
      { id: 'App1', value: 'App1' },
      { id: 'App2', value: 'App2' },
      { id: 'Temp', value: 'Temp' },
    ],
    onApply: () => {},
    filterName: 'Apps',
  };

  test('should display search text box', async () => {
    await renderMultiSelectFilter(multiSelectFilter);
    expect(screen.getAllByTestId('search-input')[0]).toBeInTheDocument();
  });

  test('should display no results when there are no items', async () => {
    await renderMultiSelectFilter({ items: [], onApply: () => {}, filterName: 'Apps' });
    expect(screen.getAllByTestId('search-list-no-results')[0]).toBeInTheDocument();
  });

  test('should search items when the search query is provided', async () => {
    await renderMultiSelectFilter(multiSelectFilter);
    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: 'App' },
    });
    expect(screen.queryByText('Temp')).toBeFalsy();
  });
});

it('should have an alert message', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    alertMessage: {
      severity: 'error',
      text: 'this is an error message',
    },
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  expect(screen.getByText('this is an error message')).toBeInTheDocument();
});

it('should not have an alert message', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  expect(screen.queryByTestId('alert-message')).not.toBeInTheDocument();
});

it('should disable filter when zero items available', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1', count: 0, totalCount: 2, selected: false }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));

  expect(screen.getByTestId('form-control-label')).toHaveStyle({ color: '#5E6974' });
  expect(screen.getByRole('checkbox')).not.toBeChecked();
});
