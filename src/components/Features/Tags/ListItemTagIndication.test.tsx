import { render, screen, act, waitFor } from 'test-utils';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { ListItemTagIndicationProps } from './ListItemTagIndication';
import { Default as ListItemTagIndicationDefault } from './ListItemTagIndication.stories';

describe('ListItemTagIndication', () => {
  it('should display no tags', () => {
    const { args } = ListItemTagIndicationDefault;
    render(<ListItemTagIndicationDefault {...(args as ListItemTagIndicationProps)} tags={[]} />);
    const indication = screen.getByTestId('list-item-tag-indication');
    expect(indication.children.length).toBe(0);
  });

  it('should display only one tag', () => {
    const { args } = ListItemTagIndicationDefault;
    render(
      <ListItemTagIndicationDefault
        {...(args as ListItemTagIndicationProps)}
        tags={(args as ListItemTagIndicationProps).tags.slice(0, 1)}
      />
    );
    const indication = screen.getByTestId('list-item-tag-indication');
    expect(indication.children.length).toBe(1);
  });

  it('should display multiple tags', () => {
    const { args } = ListItemTagIndicationDefault;
    render(<ListItemTagIndicationDefault {...(args as ListItemTagIndicationProps)} />);
    const indication = screen.getByTestId('list-item-tag-indication');
    expect(indication.children.length).toBe(3);
  });

  it('should display a plus icon if there are more than 2 tags', () => {
    const { args } = ListItemTagIndicationDefault;
    render(<ListItemTagIndicationDefault {...(args as ListItemTagIndicationProps)} />);
    const indication = screen.getByTestId('list-item-tag-indication');
    expect(indication.children.length).toBe(3);
    expect(screen.getByTestId('plus-icon')).toBeInTheDocument();
  });

  it('should display popper on hover', () => {
    const { args } = ListItemTagIndicationDefault;
    render(<ListItemTagIndicationDefault {...(args as ListItemTagIndicationProps)} />);
    const indication = screen.getByTestId('list-item-tag-indication');
    expect(screen.queryByTestId('popper')).toBeNull();
    act(() => {
      fireEvent.mouseEnter(indication);
    });
    expect(screen.getByTestId('popper')).toBeInTheDocument();
  });

  it('should hide popper on mouse leave', async () => {
    const { args } = ListItemTagIndicationDefault;
    render(<ListItemTagIndicationDefault {...(args as ListItemTagIndicationProps)} />);
    const indication = screen.getByTestId('list-item-tag-indication');
    act(() => {
      fireEvent.mouseEnter(indication);
    });
    expect(screen.getByTestId('popper')).toBeInTheDocument();
    act(() => {
      fireEvent.mouseLeave(indication);
    });
    await waitFor(() => expect(screen.queryByTestId('popper')).toBeNull());
  });
});
