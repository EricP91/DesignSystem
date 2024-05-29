import { render, screen } from 'test-utils';
import React from 'react';
import { Multiple, MultipleWithScroll, Single } from './TagListPopover.stories';
import { TagListPopoverProps } from './TagListPopover';

it('should display single tag', () => {
  render(<Single {...(Single.args as TagListPopoverProps)} />);
  expect(screen.getByText('Tag'));
});

it('should display multiple tags', () => {
  render(<Multiple {...(Multiple.args as TagListPopoverProps)} />);
  expect(screen.getByText('This is a long tag #1'));
  expect(screen.getByText(`+4`));
});
it('should display multiple with scroll tags', () => {
  render(<MultipleWithScroll {...(MultipleWithScroll.args as TagListPopoverProps)} />);
  expect(screen.getByText('This is a long tag #1'));
  expect(screen.getByText(`+5`));
});
