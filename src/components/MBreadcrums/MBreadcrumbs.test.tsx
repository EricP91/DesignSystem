import React from 'react';
import { render, screen } from 'test-utils';
import { MemoryRouter } from 'react-router-dom';
import { DashboardIcon } from '../../assets/icons';
import MBreadcrumbs from './MBreadcrumbs';

describe('MBreadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <MBreadcrumbs
          links={[
            { name: 'Dashboard', href: '', icon: <DashboardIcon /> },
            { name: 'Assignment #804', href: '' },
          ]}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Dashboard')).toHaveStyle('color: #121E28');
    expect(screen.getByText('Assignment #804')).toHaveStyle('color: #0064CC');
    expect(screen.getByTestId('NavigateNextIcon')).toBeInTheDocument();
  });
});
