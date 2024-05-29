import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import MAccordion from './MAccordion';

it('should show only header when collapsed', () => {
  render(<MAccordion header={<span>header</span>}>content</MAccordion>);
  expect(screen.getByText('content')).toHaveStyle({ visibility: 'hidden' });
  expect(screen.getByText('header')).toBeInTheDocument();
});

it('should show content when expanded', () => {
  render(<MAccordion header={<span>header</span>}>content</MAccordion>);
  fireEvent.click(screen.getByText('header'));
  expect(screen.getByText('content')).not.toHaveStyle({ visibility: 'hidden' });
});
