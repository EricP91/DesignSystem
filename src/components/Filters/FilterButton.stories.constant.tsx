import { addDays, addYears } from 'date-fns';
import { Range } from 'react-date-range';
import { MStaticDateRangePickerProps } from '../Datepicker/MStaticDateRangePicker';
import palette from '../../theme/palette';

const range: Range = {
  startDate: undefined,
  endDate: new Date(0),
  key: 'selection',
  color: palette.light.primary.main,
};

export const dateRangeProps: MStaticDateRangePickerProps = {
  dateRangeProps: {
    months: 2,
    onChange: ({ selection }) => {
      range.startDate = selection?.startDate;
      range.endDate = selection?.endDate;
    },
    shownDate: addDays(new Date(), -30),
    ranges: [range],
    maxDate: addYears(new Date(), 0),
    minDate: addYears(new Date(), -20),
    direction: 'horizontal',
    showDateDisplay: false,
  },
};
