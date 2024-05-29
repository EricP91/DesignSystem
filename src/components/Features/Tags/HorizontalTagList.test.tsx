import { render, screen } from 'test-utils';
import React from 'react';
import { HorizontalTagListProps } from './HorizontalTagList';
import { Default as HorizontalTagListDefault } from './HorizontalTagList.stories';

describe('HorizontalTagList', () => {
  it('should display no tags', () => {
    const { args } = HorizontalTagListDefault;
    render(<HorizontalTagListDefault {...(args as HorizontalTagListProps)} tags={[]} />);
    const tag = screen.queryByText((args as HorizontalTagListProps).tags[0].name);
    expect(tag).toBeNull();
  });

  it('should display only one tag', () => {
    const { args } = HorizontalTagListDefault;
    render(<HorizontalTagListDefault {...(args as HorizontalTagListProps)} />);
    const tag = screen.queryByText((args as HorizontalTagListProps).tags[0].name);
    expect(tag).toBeInTheDocument();
    expect(screen.queryByText('+')).toBeNull();
  });

  it('should display multiple tags', () => {
    const { args } = HorizontalTagListDefault;
    render(<HorizontalTagListDefault {...(args as HorizontalTagListProps)} />);
    expect(screen.queryByText((args as HorizontalTagListProps).tags[0].name)).toBeInTheDocument();
    expect(screen.queryByText((args as HorizontalTagListProps).tags[1].name)).toBeInTheDocument();
    expect(screen.queryByText((args as HorizontalTagListProps).tags[2].name)).toBeInTheDocument();
    expect(screen.queryByText((args as HorizontalTagListProps).tags[3].name)).toBeInTheDocument();
    expect(screen.queryByText('+')).toBeNull();
  });
});
