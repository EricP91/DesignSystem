import { render, screen } from 'test-utils';
import React from 'react';
import { Default } from './TagList.stories';
import { TagListProp } from './TagList';

it('should display 3 tags', () => {
  render(<Default {...(Default.args as TagListProp)} />);
  expect(screen.getByText('Tag 1'));
  expect(screen.getByText('Tag 2'));
  expect(screen.getByText('Tag 3'));
});

it('should highlight tag matches', () => {
  render(<Default {...(Default.args as TagListProp)} highlight="tag" />);
  expect(screen.getAllByText('Tag'));
});
