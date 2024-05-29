import React from 'react';
import { StepperProps } from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import isString from 'lodash/isString';
import {
  StepperStyled,
  IconOuterCircleStyled,
  IconInnerCircleStyled,
  TitleStyled,
  SubTitleStyled,
  StepContentStyled,
} from './MVerticalStepperStyled';

export interface StepType {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  content?: string;
  icon: React.ReactNode;
}

export interface MVerticalStepperProps extends StepperProps {
  steps: StepType[];
}

const MVerticalStepper: React.FC<MVerticalStepperProps> = ({ activeStep = -1, steps, ...params }) => (
  <StepperStyled {...params} activeStep={activeStep} orientation="vertical">
    {steps.map((step, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Step key={i}>
        <StepLabel
          icon={
            <IconOuterCircleStyled
              data-testid={`outer-circle-${i}`}
              completed={i < activeStep}
              active={activeStep === i}
            >
              <IconInnerCircleStyled data-testid={`inner-circle-${i}`} active={activeStep === i}>
                {step.icon}
              </IconInnerCircleStyled>
            </IconOuterCircleStyled>
          }
        >
          {isString(step.title) ? (
            <TitleStyled display="block" variant="xSmallBold">
              {step.title}
            </TitleStyled>
          ) : (
            step.title
          )}
          {isString(step.subtitle) ? (
            <SubTitleStyled active={activeStep === i} variant="textMedium">
              {step.subtitle}
            </SubTitleStyled>
          ) : (
            step.subtitle
          )}
        </StepLabel>
        <StepContentStyled>{step.content}</StepContentStyled>
      </Step>
    ))}
  </StepperStyled>
);

export default MVerticalStepper;
