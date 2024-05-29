import React from 'react';
import { render, screen } from 'test-utils';
import { ArrowIcon, CaseIcon, MagnifyingGlassIcon } from '../../assets/icons';
import MVerticalStepper from './MVerticalStepper';

describe('MVerticalStepper', () => {
  const steps = [
    {
      title: 'Step 1',
      subtitle: 'Subtitle 1',
      content: 'Content 1',
      icon: <ArrowIcon />,
    },
    {
      title: 'Step 2',
      subtitle: 'Subtitle 2',
      content: 'Content 2',
      icon: <MagnifyingGlassIcon />,
    },
    {
      title: 'Step 3',
      subtitle: 'Subtitle 3',
      content: 'Content 3',
      icon: <CaseIcon />,
    },
  ];

  it('should only show the active step content', () => {
    render(<MVerticalStepper activeStep={0} steps={steps} />);
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('should show title & subtitle for all steps', () => {
    render(<MVerticalStepper activeStep={0} steps={steps} />);
    steps.forEach((_step, i) => {
      expect(screen.getByText(`Step ${i + 1}`)).toBeVisible();
      expect(screen.getByText(`Subtitle ${i + 1}`)).toBeVisible();
    });
  });

  it('should render active step', () => {
    render(<MVerticalStepper activeStep={0} steps={steps} />);

    expect(screen.getByTestId('inner-circle-0')).toHaveStyle({
      backgroundColor: '#0064CC',
    });
    expect(screen.getByTestId('outer-circle-0')).toHaveStyle({
      borderColor: '#0064CC',
      borderRadius: '50%',
    });
  });

  it('should render non active step', () => {
    render(<MVerticalStepper activeStep={0} steps={steps} />);

    expect(screen.getByTestId('outer-circle-1')).toHaveStyle({
      borderColor: '#ADB9BF',
    });
  });

  it('should render complete step', () => {
    render(<MVerticalStepper activeStep={1} steps={steps} />);

    expect(screen.getByTestId('outer-circle-0')).toHaveStyle({
      borderColor: '#458922',
      backgroundColor: '#ECF7F0',
    });
  });
});
