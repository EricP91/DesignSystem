import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArrowIcon, MagnifyingGlassIcon, ScanIcon } from '../../assets/icons';
import MVerticalStepper, { MVerticalStepperProps } from './MVerticalStepper';

export default {
  title: 'Components/Stepper',
  component: MVerticalStepper,
} as Meta;

const Template: Story<MVerticalStepperProps> = (args) => <MVerticalStepper {...args} />;

export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
  steps: [
    {
      title: 'STEP 1',
      subtitle: 'Extraction path',
      content: 'Define the input path and what output to activate the profile',
      icon: <ArrowIcon />,
    },
    {
      title: 'STEP 2',
      subtitle: 'Create profile',
      content:
        'Define the profile, determine the level of priority that will affect the speed of the extraction completion, insert paths so that the process ends successfully and the output is predefined',
      icon: <ScanIcon />,
    },
    {
      title: 'STEP 3',
      subtitle: 'Enrichment details',
      content: 'Available Examination Tools and Analysis engines to run on the evidence.',
      icon: <MagnifyingGlassIcon />,
    },
  ],
  activeStep: 0,
};
