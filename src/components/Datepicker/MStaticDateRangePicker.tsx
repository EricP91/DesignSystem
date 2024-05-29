import { DateRangePicker, DateRangePickerProps } from 'react-date-range';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  datepicker: {
    padding: theme.spacing(1),
    '& .rdrDefinedRangesWrapper': {
      display: 'none',
    },
    '& .rdrDayNumber': {
      fontWeight: theme.typography.body3?.fontWeight,
      fontSize: theme.typography.body3?.fontSize,
    },
    '& .rdrMonthName': {
      fontWeight: theme.typography.body4?.fontWeight,
      fontSize: theme.typography.body4?.fontSize,
      color: theme.palette.grey[800],
    },
    '& .rdrDay:not(.rdrDayPassive) ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span ':
      {
        color: `${theme.palette.grey[0]}`,
      },
    '& .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span':
      {
        color: theme.palette.grey[1300],
      },
    '& .rdrMonth button .rdrInRange': {
      color: `${theme.palette.grey[200]} !important`,
    },
  },
  buttonsFooter: {
    '& .MuiButton-root': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export interface MStaticDateRangePickerProps {
  dateRangeProps: DateRangePickerProps;
  children?: React.ReactNode;
}

export default function MStaticDateRangePicker({ dateRangeProps, children }: MStaticDateRangePickerProps): JSX.Element {
  const classes = useStyles();

  return (
    <div data-testid="date-range-picker" className={classes.datepicker}>
      <Box sx={{ mb: 1 }}>
        <DateRangePicker {...dateRangeProps} />
      </Box>
      <Box className={classes.buttonsFooter} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        {children}
      </Box>
    </div>
  );
}
