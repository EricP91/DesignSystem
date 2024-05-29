import React from 'react';
import { act, fireEvent, render, screen, waitFor } from 'test-utils';

import { TagCheckboxListProps } from './TagCheckboxList';
import { Default, WhileLoading, WithContainer, WithUsers } from './TagCheckboxList.stories';

describe('TagCheckboxList', () => {
  const onClickSpy = jest.fn();

  it('should open popover when clicking the add tag button', () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    expect(screen.getAllByTestId('tag-item-text').length).toBe(5);
  });

  it('should call back the popover open state when clicking toggle button', () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} onClick={onClickSpy} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    expect(onClickSpy).toHaveBeenCalledWith(true);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    expect(onClickSpy).toHaveBeenCalledWith(false);
  });

  it('should render popover with parent container', () => {
    render(<WithContainer {...(WithContainer.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    expect(screen.getAllByTestId('tag-item-text').length).toBe(5);
  });

  it('should close the popover when clicking the add tag button (if the popover is already opened', async () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tag-item-text').length).toBe(5));
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.queryAllByTestId('tag-item-text').length).toBe(0));
    expect(screen.queryAllByTestId('tag-item-text').length).toBe(0);
  });

  it('should initially render all assigned tags in their respective container ', () => {
    const assignedTagsLength = (Default.args as TagCheckboxListProps)?.assignedTags?.length;
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    expect(screen.getByTestId('assigned-tags-list').children.length).toBe(assignedTagsLength);
  });

  it('should initially render all unassigned tags in their respective container ', () => {
    const unassignedTagsLength = (Default.args as TagCheckboxListProps)?.unassignedTags?.length;
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    expect(screen.getByTestId('unassigned-tags-list').children.length).toBe(unassignedTagsLength);
  });

  it('should move an unassigned tag to assigned tags when clicking the checkbox besides it', async () => {
    const assignedTagsLength = (Default.args as TagCheckboxListProps)?.assignedTags?.length || 0;
    const unassignedTagsLength = (Default.args as TagCheckboxListProps)?.unassignedTags?.length || 0;

    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tag-list-checkbox-assign')[0]).toBeInTheDocument());
    await act(() => {
      fireEvent.click(screen.getAllByTestId('tag-list-checkbox-assign')[0]);
    });

    expect(screen.getByTestId('assigned-tags-list').children.length).toBe(assignedTagsLength + 1);
    expect(screen.getByTestId('unassigned-tags-list').children.length).toBe(unassignedTagsLength - 1);
  });

  it('should move an assigned tag to unassigned tags when clicking the checkbox besides it', async () => {
    const unassignedTagsLength = (Default.args as TagCheckboxListProps)?.unassignedTags?.length || 0;
    const assignedTagsLength = (Default.args as TagCheckboxListProps)?.assignedTags?.length || 0;

    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tag-list-checkbox-unassign')[1]).toBeInTheDocument());
    await act(() => {
      fireEvent.click(screen.getAllByTestId('tag-list-checkbox-unassign')[1]);
    });

    expect(screen.getByTestId('assigned-tags-list').children.length).toBe(assignedTagsLength - 1);
    expect(screen.getByTestId('unassigned-tags-list').children.length).toBe(unassignedTagsLength + 1);
  });

  it('should display a divider when there are both assigned and unassigned tags passed to the component', async () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tag-list-checkbox-unassign')[0]).toBeInTheDocument());
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('should not render a divider when assigned tags is empty', async () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} assignedTags={[]} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tag-list-checkbox-assign')[0]).toBeInTheDocument());
    expect(screen.queryByTestId('divider')).toBeNull();
  });

  it('should not render a divider when unassigned tags is empty', async () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} unassignedTags={[]} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tag-list-checkbox-unassign')[0]).toBeInTheDocument());
    expect(screen.queryByTestId('divider')).toBeNull();
  });

  it('should add a new unassigned tag when typing into tag edit input and clicking save', async () => {
    const unassignedTagsLength = (Default.args as TagCheckboxListProps)?.unassignedTags?.length || 0;
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await act(() => {
      fireEvent.click(screen.getByTestId('add-tag-button'));
    });
    await waitFor(() => expect(screen.getByTestId('edit-tag-wrapper')));
    await act(() => {
      fireEvent.change(screen.getByTestId('tag-edit-input'), { target: { value: 'Evidence' } });
    });
    await act(() => {
      fireEvent.click(screen.getByTestId('save-tag-button'));
    });
    await waitFor(() =>
      expect(screen.getByTestId('unassigned-tags-list').children.length).toBe(unassignedTagsLength + 1)
    );
  });

  it('should edit an unassigned tag when hovering tag row and clicking edit button', async () => {
    const unassignedTagsLength = (Default.args as TagCheckboxListProps)?.unassignedTags?.length || 0;
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await act(() => {
      fireEvent.mouseOver(screen.getAllByTestId('unassigned-tag-row')[0]);
    });
    await waitFor(() => expect(screen.getAllByTestId('action-buttons')[0]).toBeInTheDocument());
    await act(() => {
      fireEvent.click(screen.getAllByTestId('edit-tag-button')[0]);
    });
    await waitFor(() => expect(screen.getByTestId('tag-edit-input')).toBeInTheDocument());
    await act(() => {
      fireEvent.change(screen.getByTestId('tag-edit-input'), { target: { value: 'Evidence2' } });
    });
    await act(() => {
      fireEvent.click(screen.getByTestId('save-tag-button'));
    });
    await waitFor(() => expect(screen.getByText('Evidence2')).toBeInTheDocument());
    expect(screen.getByTestId('unassigned-tags-list').children.length).toBe(unassignedTagsLength);
  });

  it('should delete an unassigned tag when hovering tag row and clicking delete button', async () => {
    const unassignedTagsLength = (Default.args as TagCheckboxListProps)?.unassignedTags?.length || 0;
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await act(() => {
      fireEvent.mouseOver(screen.getAllByTestId('unassigned-tag-row')[0]);
    });
    await waitFor(() => expect(screen.getAllByTestId('action-buttons')[0]).toBeInTheDocument());
    await act(() => {
      fireEvent.click(screen.getAllByTestId('delete-tag-button')[0]);
    });
    await waitFor(() =>
      expect(screen.getByTestId('unassigned-tags-list').children.length).toBe(unassignedTagsLength - 1)
    );
  });

  it('should display the skeleton element while loading', () => {
    render(<Default {...(WhileLoading.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    expect(screen.queryAllByTestId('tag-checkbox-list-item-skeleton').length).toBeGreaterThan(0);
  });

  it('should display search input', () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    waitFor(() => expect(screen.getByTestId('search-input')).toBeInTheDocument());
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('should toggle between create tag and edit tag', async () => {
    render(<Default {...(Default.args as TagCheckboxListProps)} />);
    await act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await act(() => {
      fireEvent.mouseOver(screen.getAllByTestId('unassigned-tag-row')[0]);
    });
    await waitFor(() => expect(screen.getAllByTestId('action-buttons')[0]).toBeInTheDocument());
    await act(() => {
      fireEvent.click(screen.getAllByTestId('edit-tag-button')[0]);
    });
    await waitFor(() => expect(screen.getByTestId('tag-edit-input')).toBeInTheDocument());
    await act(() => {
      fireEvent.click(screen.getByTestId('add-tag-button'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tag-edit-input')).toHaveLength(1));
  });

  it('should display various types of tagged users', async () => {
    render(<WithUsers {...(WithUsers.args as TagCheckboxListProps)} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getAllByTestId('tagged-user-container')).toHaveLength(8));
    await waitFor(() => expect(screen.getAllByTestId('name-avatar')).toHaveLength(4));
    await waitFor(() => expect(screen.getAllByTestId('unidentified-user-avatar')).toHaveLength(2));
    await waitFor(() => expect(screen.getAllByTestId('other-user-text')).toHaveLength(2));
  });
});
