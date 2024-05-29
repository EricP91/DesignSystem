import React, { useState, useEffect } from 'react';
import { Button, IconButton, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SortArrowsIcon } from '../../assets/icons';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  button: {
    backgroundColor: theme.palette.ui.brandLightest,
    minWidth: 0,
    '& path': {
      fill: theme.palette.ui.brand,
    },
    '&.Mui-disabled': {
      '& .MuiInputLabel-root': {
        color: theme.palette.grey[600],
      },
    },
  },
  label: {
    '&.MuiInputLabel-root': {
      display: 'inline',
      marginRight: theme.spacing(0.5),
      fontSize: theme.spacing(2),
      fontWeight: 500,
      color: theme.palette.text.primary,
      cursor: 'pointer',
    },
    '&.notSelected': {
      marginRight: 0,
    },
  },
  select: {
    color: theme.palette.ui.brand,
    '& .MuiSelect-root': {
      padding: 0,
      fontSize: theme.spacing(2),
      fontWeight: 500,
      color: theme.palette.grey[600],
      textTransform: 'initial',
      '& .MuiSelect-select-MuiInputBase-input-MuiInput-input': {
        paddingRight: 0,
      },
    },

    '& .MuiSelect-select:focus': {
      backgroundColor: 'inherit',
    },
    '& .MuiSelect-icon': {
      display: 'none',
    },
    '&.notSelected': {
      '& .MuiSelect-root': {
        minWidth: 0,
      },
    },
  },
  selectOption: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    fontSize: theme.spacing(1.75),
    fontWeight: 500,
  },
  orderIcon: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.ui.brandLightest,
    '&.Mui-disabled': {
      '& .MuiSvgIcon-root path': {
        fill: theme.palette.grey[600],
      },
    },
    '&.desc': {
      transform: 'rotate(0)',
    },
    '&.asc': {
      transform: 'rotate(-180deg)',
    },
  },
}));

interface SortSelectOption {
  sortByValue: string;
  sortByText: string;
  sortOrderTooltip: { [key: string]: string };
}

export interface SortSelectProps {
  label: string;
  disabled?: boolean;
  labelSuffix?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  options: SortSelectOption[];
  onSortChange: (sortBy: string | undefined, sortOrder: string) => void;
}

function SortSelect({
  label,
  disabled = false,
  labelSuffix = ':',
  sortBy: defaultSortBy = '',
  sortOrder: defaultSortOrder = 'desc',
  options,
  onSortChange,
}: SortSelectProps): JSX.Element {
  const classes = useStyles();

  const orderOptions: ('asc' | 'desc')[] = ['desc', 'asc'];
  const [firstOrderOption, secondOrderOption] = orderOptions;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);

  useEffect(() => {
    if (!sortOrder && defaultSortOrder) {
      setSortOrder(defaultSortOrder);
    }
  }, [sortOrder, defaultSortOrder]);

  useEffect(() => {
    if (!sortBy && defaultSortBy) {
      setSortBy(defaultSortBy);
    }
  }, [sortBy, defaultSortBy]);

  const onChangeSortBy = (event: { target: { value: string } }): void => {
    const changedSortBy = event.target.value;
    setSortBy(changedSortBy);
    onSortChange(changedSortBy, sortOrder);
  };

  const onToggleSortOrder = (): void => {
    const changedSortOrder = sortOrder === firstOrderOption ? secondOrderOption : firstOrderOption;
    setSortOrder(changedSortOrder);
    onSortChange(sortBy, changedSortOrder);
  };

  const getSortOrderTooltip = (): string => {
    const selectedOption = options.find((option) => option.sortByValue === sortBy);
    return selectedOption ? selectedOption.sortOrderTooltip[sortOrder] : '';
  };

  const onButtonClick = (): void => {
    if (options.length > 1) setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Button
        color="inherit"
        variant="text"
        className={classes.button}
        disabled={disabled}
        data-testid="sort-select-button"
        onClick={onButtonClick}
        endIcon={isMenuOpen ? <KeyboardArrowUpIcon fill="red" /> : <KeyboardArrowDownIcon />}
      >
        <InputLabel
          htmlFor="sort-select-input"
          className={clsx(classes.label, !sortBy && 'notSelected')}
          data-testid="sort-select-label"
          onClick={(evt) => {
            evt.preventDefault();
          }}
        >
          {label}
          {sortBy && labelSuffix}
        </InputLabel>
        <Select
          SelectDisplayProps={{ style: { padding: 0 } }}
          variant="standard"
          className={clsx(classes.select, !sortBy && 'notSelected')}
          data-testid="sort-select-container"
          inputProps={{
            id: 'sort-select-input',
            'data-testid': 'sort-select-input',
          }}
          MenuProps={{
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          }}
          disableUnderline
          open={isMenuOpen}
          value={sortBy}
          onChange={onChangeSortBy}
        >
          {options.map(({ sortByValue, sortByText }) => (
            <MenuItem
              key={sortByValue}
              value={sortByValue}
              className={classes.selectOption}
              data-testid="sort-select-text"
            >
              {sortByText}
            </MenuItem>
          ))}
        </Select>
      </Button>
      <Tooltip placement="top" title={getSortOrderTooltip()} arrow>
        <span>
          <IconButton
            size="small"
            data-testid="sort-order-icon"
            className={clsx(classes.orderIcon, sortOrder)}
            disabled={disabled || !sortBy}
            onClick={onToggleSortOrder}
          >
            <SortArrowsIcon />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );
}

export default SortSelect;
