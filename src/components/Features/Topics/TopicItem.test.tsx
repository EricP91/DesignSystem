import { render, screen } from 'test-utils';
import React from 'react';
import { TopicItemProps } from './TopicItem';
import { Default as TopicItemDefault, WithCount as TopicItemWithCount } from './TopicItem.stories';

describe('TopicItem', () => {
  test('should render topic item default', () => {
    const { args } = TopicItemDefault;
    render(<TopicItemDefault {...(args as TopicItemProps)} />);
    expect(screen.getByText(`${args?.name}`)).toBeTruthy();
    expect(screen.getByTestId('topics-item-circle')).toHaveStyle({ borderColor: args?.color });
  });

  test('should render topic item with count', () => {
    const { args } = TopicItemWithCount;
    render(<TopicItemWithCount {...(args as TopicItemProps)} />);
    expect(screen.getByText(`${args?.name} (${args?.count})`)).toBeTruthy();
    expect(screen.getByTestId('topics-item-circle')).toHaveStyle({ borderColor: args?.color });
  });
});
