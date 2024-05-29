import { render, screen } from 'test-utils';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { ChatIcon } from '../../assets/icons';
import { storybookMenuLinks as menuLinks } from './utils';
import SideBar, { reduceChild } from './SideBar';

const menuLink = {
  subheader: 'investigative views',
  items: [
    {
      icon: ChatIcon,
      title: 'dashboard',
      href: 'dashboard',
      items: [
        {
          title: 'app',
          href: '/app',
        },
        {
          title: 'e-commerce',
          href: '/ecommerce',
        },
        {
          title: 'analytics',
          href: '/analytics',
        },
      ],
    },
    { title: 'chat', href: 'chat', icon: ChatIcon },
  ],
};

describe('should render correctly components that use useLocation', () => {
  const history = createMemoryHistory();
  const route = '/some-route';
  history.push(route);

  it('should render the SideBar without errors', () => {
    render(
      <Router history={history}>
        <SideBar data-testid="side-bar" isOpenNav onCloseNav={() => null} menuLinks={menuLinks} />
      </Router>
    );
  });
});

it('reduceChild should run with out errors', () => {
  expect(() => reduceChild({ array: [], item: menuLink.items[0], pathname: 'random', level: 1 })).not.toThrow();
});
