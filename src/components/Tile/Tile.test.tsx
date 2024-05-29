import React from 'react';
import { render, screen } from 'test-utils';
import {
  expectedActiveErrorStyles,
  expectedActiveInfoStyles,
  expectedActiveSuccessStyles,
  expectedActiveWarningStyles,
  expectedCommonStyles,
  expectedInActiveErrorStyles,
} from './tests/constants';
import Tile from './Tile';

describe('Tile', () => {
  it('should render tile', () => {
    render(<Tile>Tile Content</Tile>);

    expect(screen.queryByTestId('tile-container')).toHaveStyle({
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.12)',
      borderRadius: '8px',
      border: '1px solid #D1E4F9',
      cursor: 'default',
    });
    expect(screen.getByText('Tile Content')).toBeInTheDocument();
  });

  it.each([
    ['info', false, expectedCommonStyles],
    ['info', true, expectedActiveInfoStyles],
    ['error', false, expectedInActiveErrorStyles],
    ['error', true, expectedActiveErrorStyles],
    ['warning', false, expectedCommonStyles],
    ['warning', true, expectedActiveWarningStyles],
    ['success', false, expectedCommonStyles],
    ['success', true, expectedActiveSuccessStyles],
  ])('should show correct style when color is %p and active is %p ', (color, active, expectedResult) => {
    render(<Tile color={color as 'info' | 'success' | 'error' | 'warning' | undefined} active={active} />);
    expect(screen.queryByTestId('tile-container')).toHaveStyle(expectedResult);
  });
});
