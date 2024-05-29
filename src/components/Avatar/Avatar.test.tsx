import { render, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { FallbackAvatar, IconAvatar, ImageAvatar, LetterAvatar } from './Avatar.stories';

it('should render fallback avatar', () => {
  render(<FallbackAvatar {...FallbackAvatar.args} />);
  expect(screen.getByTestId('PersonIcon')).toBeTruthy();
});

it('should renders letter avatar', () => {
  render(<LetterAvatar {...LetterAvatar.args} />);
  expect(screen.getByText('EX')).toBeTruthy();
});

it('should render image avatar', () => {
  const { container } = render(<ImageAvatar {...ImageAvatar.args} />);
  expect(container.querySelector('img')).toBeTruthy();
});

it('should render IconAvatar', () => {
  render(<IconAvatar {...IconAvatar.args} />);
  expect(screen.getAllByTestId('svg')).toBeTruthy();
});
