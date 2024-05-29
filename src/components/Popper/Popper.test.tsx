import { render } from 'test-utils';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Default } from './Popper.stories';
import { PopperProps } from './Popper';

it('should render without errors when provided the minimum required props', () => {
  const { getByTestId } = render(<Default {...(Default.args as PopperProps)} isPopperOpen />);
  expect(getByTestId('popper')).toBeTruthy();
});

it('should not render an arrow if specified from props', () => {
  const { container } = render(<Default {...(Default.args as PopperProps)} arrow={false} />);
  expect(container.querySelector('.MuiPopper-arrow')).toBeNull();
});

it('pressing the button should update the state and display the popper', () => {
  const { getByTestId, getByRole } = render(<Default {...(Default.args as PopperProps)} />);
  fireEvent.click(getByRole('button'));
  expect(getByTestId('popper')).toBeTruthy();
});
