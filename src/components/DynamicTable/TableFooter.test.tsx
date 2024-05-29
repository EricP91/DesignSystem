import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeConfig } from '../../theme';
import TableFooter from './TableFooter';

const renderError = (): JSX.Element => (
  <tr>
    <td>Error loading</td>
  </tr>
);

describe('TableFooter', () => {
  it('should render a loading records footer', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <TableFooter status="loading" renderError={renderError} />
        </table>
      </ThemeConfig>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render a loading error footer', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <TableFooter status="error" renderError={renderError} />
        </table>
      </ThemeConfig>
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
