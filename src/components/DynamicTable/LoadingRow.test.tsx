import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeConfig } from '../../theme';
import LoadingRow from './LoadingRow';

describe('LoadingRow', () => {
  it('should render a loading spinner', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <tbody>
            <LoadingRow />
          </tbody>
        </table>
      </ThemeConfig>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
