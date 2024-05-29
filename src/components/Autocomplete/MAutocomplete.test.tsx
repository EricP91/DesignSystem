import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import { within } from '@testing-library/react';
import MAutocomplete, { MAutocompleteProps } from './MAutocomplete';
import { Default as AutocompleteDefault } from './MAutocomplete.stories';

describe('MAutocomplete', () => {
  const { args } = AutocompleteDefault;

  test('should render the autocomplete component', () => {
    render(<MAutocomplete {...(args as MAutocompleteProps)} />);
    expect(screen.getByTestId('autocomplete-component')).toBeInTheDocument();
    expect(screen.getByTestId('autocomplete-input')).toBeInTheDocument();
  });

  test('should render the autocomplete options and display its value when selected', async () => {
    render(<MAutocomplete {...(args as MAutocompleteProps)} />);

    const autocomplete = screen.getByTestId('autocomplete-component');
    const input = within(autocomplete).getByRole('combobox');
    autocomplete.focus();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fireEvent.change(input, { target: { value: args?.options[0]?.text } });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await waitFor(() => screen.getByTestId(`autocomplete-option-${args?.options[0]?.id}`));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(screen.getByTestId(`autocomplete-option-${args?.options[0]?.id}`)).toBeInTheDocument();

    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(input.getAttribute('value')).toContain(args?.options[0]?.text);
  });
});
