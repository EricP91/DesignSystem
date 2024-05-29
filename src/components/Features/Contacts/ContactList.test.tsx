import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import { Custom as ContactList } from './ContactList.stories';
import { ContactListProps } from './ContactList';

describe('ContactList', () => {
  test('should render contact list', () => {
    render(<ContactList {...(ContactList.args as ContactListProps)} />);
    expect(screen.getAllByTestId('contact-list-item')).toHaveLength(ContactList?.args?.data?.length || 0);
  });

  it('should render contact list items skeletons while loading', () => {
    render(<ContactList {...(ContactList.args as ContactListProps)} isLoading />);
    expect(screen.getAllByTestId('contact-list-item-avatar-skeleton').length).toEqual(3);
  });

  test('should call onRemove when clicking remove action', async () => {
    const onRemoveMock = jest.fn();
    render(<ContactList {...(ContactList.args as ContactListProps)} showRemove={() => true} onRemove={onRemoveMock} />);
    fireEvent.mouseOver(screen.getAllByTestId('contact-list-item')[0]);
    await waitFor(() => screen.getByTestId('contact-list-item-action-remove'));
    fireEvent.click(screen.getByTestId('contact-list-item-action-remove'));
    expect(onRemoveMock).toHaveBeenCalled();
  });
});
