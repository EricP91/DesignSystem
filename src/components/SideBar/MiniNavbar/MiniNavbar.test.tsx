import React from 'react';
import { render, screen } from 'test-utils';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import MiniNavbar from './MiniNavbar';
import { CaseIcon, CogIcon, PencilIcon } from '../../../assets/icons';

const MiniNavbarWrapper = (): JSX.Element => (
  <BrowserRouter>
    <MiniNavbar
      items={[
        {
          title: 'Cases',
          link: '/cases',
          icon: <CaseIcon />,
        },
        {
          icon: <PencilIcon />,
          title: 'Edit',
          subItems: [
            { link: '/edit/write', icon: <PencilIcon />, title: 'Write' },
            { link: '/edit/settings', icon: <CogIcon />, title: 'Settings' },
          ],
        },
      ]}
    />
  </BrowserRouter>
);

describe('MiniNavbar', () => {
  it('should have default style', () => {
    render(<MiniNavbarWrapper />);
    expect(screen.getByTestId('link-item-Cases')).toHaveStyle({
      color: '#5E6974',
      backgroundColor: '#E7ECF1',
      borderLeft: '5px solid #E7ECF1',
    });
  });
  it('should have active style', () => {
    render(<MiniNavbarWrapper />);
    userEvent.click(screen.getByTestId('link-item-Cases'));
    expect(screen.getByTestId('link-item-Cases')).toHaveStyle({
      color: '#0064CC',
      backgroundColor: '#FFFFFF',
      borderLeft: '5px solid #0064CC',
    });
  });
  it('should render nav label', () => {
    render(<MiniNavbarWrapper />);
    expect(screen.getByTestId('link-item-Cases')).toBeInTheDocument();
  });

  describe('SubItems', () => {
    it('should render subitems', () => {
      render(<MiniNavbarWrapper />);
      userEvent.hover(screen.getByText('Edit'));
      expect(screen.getByText('Write')).toBeInTheDocument();
      expect(screen.getByTestId('link-sub-item-Write')).toHaveStyle({
        color: '#121E28',
      });
    });

    it('should render subitems on hover', () => {
      render(<MiniNavbarWrapper />);
      userEvent.hover(screen.getByText('Edit'));
      userEvent.hover(screen.getByText('Write'));
      expect(screen.getByTestId('link-sub-item-Write')).toHaveStyle({ backgroundColor: '#f1f4f6' });
    });

    it('should render parent & subitems as active when sub item link was clicked', () => {
      render(<MiniNavbarWrapper />);
      userEvent.hover(screen.getByText('Edit'));
      userEvent.click(screen.getByText('Write'));
      expect(screen.getByTestId('link-item-Edit')).toHaveStyle({
        color: '#0064CC',
        backgroundColor: '#FFFFFF',
        borderLeft: '5px solid #0064CC',
      });
      expect(screen.getByTestId('link-sub-item-Write')).toHaveStyle({
        color: '#0064CC',
        backgroundColor: '#FFFFFF',
        borderLeft: '5px solid #0064CC',
      });
    });

    it('should close popover when clicking on a subitem', () => {
      render(<MiniNavbarWrapper />);
      userEvent.hover(screen.getByText('Edit'));
      expect(screen.getByTestId('link-sub-item-Write')).toBeVisible();
      userEvent.click(screen.getByText('Write'));
      expect(screen.queryByTestId('link-sub-item-Write')).not.toBeVisible();
    });
  });
});
