import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeConfig } from '../../theme';
import TableBody from './TableBody';

const renderRow = (record: { id: number; name: string; role: string }): JSX.Element => (
  <tr key={record.id}>
    <td>{record.name}</td>
    <td>{record.role}</td>
  </tr>
);

const renderNoRecordsRow = (): JSX.Element => (
  <tr>
    <td>No records to show</td>
  </tr>
);

describe('TableBody', () => {
  it('should render the tbale records', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <tbody>
            <TableBody
              rows={[
                {
                  id: 0,
                  name: 'Daniel Kreag',
                  role: 'User',
                },
                {
                  id: 1,
                  name: 'Jeffrey Estrada',
                  role: 'Admin',
                },
                {
                  id: 2,
                  name: 'Ainsley Hanna',
                  role: 'Visitor',
                },
              ]}
              renderRow={renderRow}
              renderNoRecordsRow={renderNoRecordsRow}
            />
          </tbody>
        </table>
      </ThemeConfig>
    );

    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getByText('Daniel Kreag'));
  });

  it('should render the tbale records', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <tbody>
            <TableBody rows={[]} renderRow={renderRow} renderNoRecordsRow={renderNoRecordsRow} />
          </tbody>
        </table>
      </ThemeConfig>
    );

    expect(screen.getAllByRole('row')).toHaveLength(1);
    expect(screen.getByText(/no records/i));
  });
});
