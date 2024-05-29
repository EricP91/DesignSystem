import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import {
  ItemAction as ContactListItemAction,
  ItemAll as ContactListItem,
  ItemHighlight as ContactListItemHighlight,
  ItemLabel as ContactListItemLabel,
  ItemLoading as ContactListItemLoading,
} from './ContactListItem.stories';
import { ContactListItemProps } from './ContactListItem';

describe('ContactListItem', () => {
  test('should render contact list item', () => {
    render(<ContactListItem {...(ContactListItem.args as ContactListItemProps)} />);
    expect(screen.getByText(ContactListItem?.args?.name || '')).toBeTruthy();
    expect(screen.getByText(ContactListItem?.args?.identifier || '')).toBeTruthy();
  });

  test('should render contact list item skeletons when loading', async () => {
    render(<ContactListItemLoading {...(ContactListItemLoading.args as ContactListItemProps)} />);
    expect(screen.getByTestId('contact-list-item-avatar-skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('contact-list-item-text-primary-skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('contact-list-item-text-secondary-skeleton')).toBeInTheDocument();
  });

  test('should call on click when clicking on contact list item', async () => {
    const onClickMock = jest.fn();
    render(<ContactListItem {...(ContactListItem.args as ContactListItemProps)} onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId('contact-list-item'));
    expect(onClickMock).toHaveBeenCalled();
  });

  test('should render contact list item when applying highlight', async () => {
    render(<ContactListItemHighlight {...(ContactListItemHighlight.args as ContactListItemProps)} />);
    expect(screen.getAllByText(ContactListItemHighlight?.args?.highlight || '').length).toEqual(3);
  });

  test('should render contact list item with labels', async () => {
    render(<ContactListItemLabel {...(ContactListItemLabel.args as ContactListItemProps)} />);
    expect(screen.getByText(ContactListItemLabel?.args?.nameLabel || '')).toBeTruthy();
    expect(screen.getByText(ContactListItemLabel?.args?.identifierLabel || '')).toBeTruthy();
  });

  test('should render action element when hovering contact list item', async () => {
    render(<ContactListItemAction {...(ContactListItemAction.args as ContactListItemProps)} />);
    fireEvent.mouseOver(screen.getByTestId('contact-list-item'));
    await waitFor(() => screen.getByTestId('action-button'));
    fireEvent.click(screen.getByTestId('action-button'));
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByTestId('contact-list-item'));
  });

  test('hould render action element when hovering contact list item action', async () => {
    render(<ContactListItemAction {...(ContactListItemAction.args as ContactListItemProps)} />);
    fireEvent.mouseOver(screen.getByTestId('contact-list-item'));
    fireEvent.mouseOver(screen.getByTestId('contact-list-item-action'));
    await waitFor(() => screen.getByTestId('action-button'));
    fireEvent.click(screen.getByTestId('action-button'));
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByTestId('contact-list-item-action'));
  });
});
