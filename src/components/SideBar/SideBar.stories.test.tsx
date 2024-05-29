import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'test-utils';
import { WithAuthAndLogo } from './SideBar.stories';

it('should render the SideBarWithAuthAndLogo without errors', () => {
  render(
    <Router>
      <WithAuthAndLogo />
    </Router>
  );
});
