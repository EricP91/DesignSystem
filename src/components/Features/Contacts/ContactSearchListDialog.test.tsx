import { render, screen } from 'test-utils';
import React from 'react';
import {
  Custom as ContactSearchListDialog,
  InfiniteScroll as ContactSearchListInfiniteScrollDialog,
} from './ContactSearchListDialog.stories';
import { ContactSearchListDialogProps } from './ContactSearchListDialog';

describe('ContactSearchListDialog', () => {
  test('should render contact search list dialog', () => {
    render(<ContactSearchListDialog {...(ContactSearchListDialog.args as ContactSearchListDialogProps)} />);
    const { data = [], title = '', type } = ContactSearchListDialog.args as ContactSearchListDialogProps;
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`${data.length} ${type}`)).toBeInTheDocument();
  });

  test('should render contact search list dialog with infinite scroll', () => {
    render(
      <ContactSearchListInfiniteScrollDialog
        {...(ContactSearchListInfiniteScrollDialog.args as ContactSearchListDialogProps)}
      />
    );
    const {
      dataLength = 0,
      title = '',
      type,
    } = ContactSearchListInfiniteScrollDialog.args as ContactSearchListDialogProps;
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`${dataLength} ${type}`)).toBeInTheDocument();
  });

  it('should call console.log when calling onClose', () => {
    const spy = jest.spyOn(console, 'log');
    if (ContactSearchListDialog?.args?.onClose) ContactSearchListDialog.args.onClose();
    expect(spy).toBeCalledWith('Closed dialog');
  });

  it('should call console.log when calling onSearchChange', () => {
    const spy = jest.spyOn(console, 'log');
    if (ContactSearchListInfiniteScrollDialog?.args?.onSearchChange)
      ContactSearchListInfiniteScrollDialog.args.onSearchChange('test');
    expect(spy).toBeCalledWith('Searched for: test');
  });
});
