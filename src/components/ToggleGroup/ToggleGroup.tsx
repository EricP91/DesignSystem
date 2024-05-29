import React, { useState, ReactElement, useEffect } from 'react';
import { ToggleButtonGroup, ToggleButton, alpha, useTheme, ToggleButtonGroupProps } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import TextAndAvatar from '../Text/TextAndAvatar';
import { MTheme } from '../..';

export interface ToggleGroupItem {
  id: string;
  value: string;
  selected?: boolean;
  disabled?: boolean;
  renderer?: () => ReactElement;
  icon?: () => ReactElement;
}

export interface ToggleGroupProps extends Omit<ToggleButtonGroupProps, 'onChange'> {
  items: ToggleGroupItem[];
  exclusive?: boolean;
  onChange?: (value: string | string[] | null) => void;
  allOption?: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    '& .MuiToggleButton-root.Mui-selected': {
      backgroundColor: alpha(theme.palette.primary.main, 0.12),
    },
  },
  toggleButton: {
    padding: theme.spacing(0.5, 2.5),
    '&.rightPadded': {
      padding: theme.spacing(0.5, 2.5, 0.5, 1),
    },
  },
}));

const getValue = (item: ToggleGroupItem): string => item.value;
const isSelected = (item: ToggleGroupItem): boolean | undefined => item.selected;

const ToggleGroup = ({ items, exclusive, onChange, allOption, ...rest }: ToggleGroupProps): JSX.Element => {
  const classes = useStyles();
  const theme: MTheme = useTheme();
  const allValues = items.map(getValue);
  const selectedValues = items.filter(isSelected).map(getValue);
  const initialValue = exclusive ? selectedValues?.[0] : selectedValues;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(selectedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const onOptionChange = (_: unknown, newValue: string | string[]): void => {
    let finalValue = newValue;

    if (!exclusive && allOption && Array.isArray(newValue) && allValues.includes(allOption)) {
      if (value?.includes(allOption)) {
        if (!newValue?.length) return;
        finalValue = newValue?.filter((val: string) => val !== allOption);
      } else if (newValue?.includes(allOption) || !newValue?.length) finalValue = [allOption];
    }

    setValue(finalValue);
    if (onChange) onChange(finalValue);
  };

  return (
    <ToggleButtonGroup value={value} exclusive={exclusive} onChange={onOptionChange} className={classes.root} {...rest}>
      {items.map((item) => {
        const selected = Array.isArray(value) ? value.includes(item?.value) : value === item?.value;
        let color;
        if (selected) color = theme.palette.primary.main;
        else if (item?.disabled) color = theme.palette.grey?.[1000];
        else color = null;
        return (
          <ToggleButton
            key={item?.id}
            value={item?.value}
            disabled={item?.disabled}
            disableRipple
            size="small"
            className={clsx(classes.toggleButton, item?.icon && 'rightPadded')}
            data-testid={`toggle-button-${item?.value}`}
          >
            <TextAndAvatar
              value={item?.value}
              renderer={
                item?.renderer
                  ? React.createElement(item?.renderer, {
                      ...(color && { style: { color } }),
                    })
                  : undefined
              }
              icon={item?.icon ? React.createElement(item?.icon, { ...(color && { fill: color }) }) : undefined}
            />
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default ToggleGroup;
