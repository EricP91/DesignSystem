import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import { Custom as ContactSearchAutocomplete } from './ContactSearchAutocomplete.stories';
import { ContactSearchAutocompleteProps } from './ContactSearchAutocomplete';

describe('ContactSearchAutocomplete', () => {
  const onSelectStub = jest.fn();

  test('should render contact search autocomplete', () => {
    render(<ContactSearchAutocomplete {...(ContactSearchAutocomplete.args as ContactSearchAutocompleteProps)} />);
  });

  test('should search contacts when the search query is provided', async () => {
    render(
      <ContactSearchAutocomplete
        {...(ContactSearchAutocomplete.args as ContactSearchAutocompleteProps)}
        onSelect={onSelectStub}
      />
    );
    fireEvent.change(screen.getByTestId('contact-search-input'), {
      target: { value: 'john' },
    });
    await waitFor(() => screen.getAllByTestId('contact-list-item'));
    expect(screen.getAllByTestId('contact-list-item').length).toBe(2);

    fireEvent.click(screen.getAllByTestId('contact-list-item')[0]);
    expect(onSelectStub).toHaveBeenCalled();
  });

  it('should call console.log when calling onClose', () => {
    const spy = jest.spyOn(console, 'log');
    const item = { id: 'test' };
    if (ContactSearchAutocomplete?.args?.onSelect) ContactSearchAutocomplete.args.onSelect(item);
    expect(spy).toBeCalledWith(`Selected item ${item.id}`);
  });
});
