import React from 'react';

import { render, screen } from 'test-utils';
import MLabel from './MLabel';
import { CategoryIcon } from '../../assets/icons/CategoryIcon';

it('should display label with default color', () => {
  const labelText = 'this is a label';
  const backgroundColor = 'Red';
  render(<MLabel backgroundColor={backgroundColor}>{labelText}</MLabel>);
  const label = screen.getByText('this is a label');
  expect(label).toHaveStyle({ backgroundColor: 'Red', color: '#FFFFFF' });
});

it('should display label with selected color', () => {
  const labelText = 'this is a label';
  const backgroundColor = 'Red';
  const color = 'yellow';
  render(
    <MLabel color={color} backgroundColor={backgroundColor}>
      {labelText}
    </MLabel>
  );
  const label = screen.getByText('this is a label');
  expect(label).toHaveStyle({ backgroundColor: 'Red', color: 'yellow' });
});

it('should display CategoryIcon with label', () => {
  const labelText = 'this is a label';
  const backgroundColor = 'Red';
  const icon = <CategoryIcon data-testid="svg" />;
  render(
    <MLabel backgroundColor={backgroundColor} icon={icon}>
      {labelText}
    </MLabel>
  );
  const label = screen.getByText('this is a label');

  expect(label).toBeInTheDocument();
  expect(screen.getAllByTestId('svg')).toBeTruthy();
});
