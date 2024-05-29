import React from 'react';
import { render, screen } from 'test-utils';
import CounterTile from './CounterTile';

describe('CounterTile', () => {
  it('should render counter tile with header and count', () => {
    render(<CounterTile header="Counter Tile Header" count={5} />);
    expect(screen.getByText('Counter Tile Header')).toHaveStyle({ fontSize: '1rem' });
    expect(screen.getByText('5')).toHaveStyle({ fontSize: '1.75rem' });
  });

  it('should render count in red if color is error', () => {
    render(<CounterTile color="error" header="Counter Tile Header" count={5} />);
    expect(screen.getByText('5')).toHaveStyle({ color: '#EB1633' });
  });

  it('should render count as element', () => {
    render(<CounterTile header="Counter Tile Header" count={<div>count as element</div>} />);
    expect(screen.getByText('count as element')).toBeInTheDocument();
  });

  it('should render header as element', () => {
    render(<CounterTile header={<div>header as element</div>} count={5} />);
    expect(screen.getByText('header as element')).toBeInTheDocument();
  });
});
