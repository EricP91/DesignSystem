import React from 'react';
import { render, screen } from 'test-utils';
import { capitalize } from '@mui/material';
import ValueDescriptionDivider from './ValueDescriptionDivider';

test('should have value , description, divider', () => {
  const description = 'test description';
  render(<ValueDescriptionDivider value="testValue" description={description} />);

  expect(screen.getByText('testValue')).toBeInTheDocument();
  expect(screen.getByText(capitalize(description))).toBeInTheDocument();
  expect(screen.getByTestId('divider')).toBeInTheDocument();
});

test('should capitalize description', () => {
  const description = 'testDescription';
  render(<ValueDescriptionDivider value="testValue" description={description} />);

  expect(screen.getByText(capitalize(description))).toBeInTheDocument();
});

test('should not have divider when description is null', () => {
  render(<ValueDescriptionDivider value="testValue" description={null} />);

  expect(screen.queryByTestId('divider')).not.toBeInTheDocument();
});
test('should not have divider when description is empty', () => {
  render(<ValueDescriptionDivider value="testValue" description="" />);

  expect(screen.queryByTestId('divider')).not.toBeInTheDocument();
});
