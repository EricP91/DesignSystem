import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary as MuiAccordionSummary,
  styled,
} from '@mui/material';

export interface MAccordionProps extends AccordionProps {
  header: React.ReactNode;
  expandIcon?: React.ReactNode;
}

const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
}));

const MAccordion = ({
  header,
  children,
  expandIcon,
  disableGutters = true,
  ...props
}: MAccordionProps): JSX.Element => (
  <Accordion disableGutters={disableGutters} {...props}>
    <AccordionSummary expandIcon={expandIcon}>{header}</AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default MAccordion;
