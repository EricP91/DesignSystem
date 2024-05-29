import React from 'react';

import { render, screen } from 'test-utils';
import { Typography } from '@mui/material';
import MSwitch from '../../Switches/MSwitch';
import MFormControlLabel from './MFormControlLabel';
import { pxToRem } from '../../../theme/utils/formatFontSize';

test('should render default text when label is string', () => {
  render(<MFormControlLabel label="test" control={<MSwitch />} />);
  expect(screen.getByText('test')).toHaveStyle({ fontSize: pxToRem(14), fontWeight: 400 });
});

test('should render default text when label is numeric', () => {
  render(<MFormControlLabel label={123} control={<MSwitch />} />);
  expect(screen.getByText(123)).toHaveStyle({ fontSize: pxToRem(14), fontWeight: 400 });
});

test('should render custom label', () => {
  render(<MFormControlLabel label={<Typography variant="h1">custom-label</Typography>} control={<MSwitch />} />);
  expect(screen.getByText('custom-label')).toHaveStyle({ fontSize: pxToRem(40), fontWeight: 700 });
});

test('should have disabled color when control is disabled', () => {
  render(<MFormControlLabel label="test" control={<MSwitch disabled />} />);
  expect(screen.getByText('test').parentElement).toHaveStyle({ color: '#5E6974' });
});
