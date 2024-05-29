import React from 'react';
import { render, screen } from 'test-utils';
import EmailNotification from './EmailNotification';

describe('EmailNotification', () => {
  it('should render header', () => {
    render(<EmailNotification header="header" image={undefined} title="" description="" footer="" />);

    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('header')).toHaveStyle('color: #121E28');
  });

  it('should always render constant do not forward disclaimer', () => {
    render(<EmailNotification header="header" image={undefined} title="" description="" footer="" />);

    expect(screen.getByText('Do not forward this email.')).toBeInTheDocument();
  });
});
