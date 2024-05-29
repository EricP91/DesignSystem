import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { alpha, Box, Button, Popover, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, Ref, useEffect, useImperativeHandle } from 'react';

// eslint-disable-next-line import/no-cycle
import { OverflowTooltip } from '..';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  filterButton: {
    height: 40,
    '&.active, &.open, &:hover': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
    },
    '&.open, &.active': {
      backgroundColor: alpha(theme.palette.primary.main, 0.12),
      color: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.grey[500], 0.1),
    },
    '&.Mui-disabled': {
      '& .MuiTypography-root': {
        color: theme.palette.grey[1000],
      },
    },
    '& .MuiButton-endIcon': {
      marginRight: theme.spacing(0.5),
    },
    '& .MuiButton-label': {
      marginLeft: theme.spacing(2),
    },
  },
  filterName: {
    whiteSpace: 'nowrap',
    color: theme.palette.grey[1300],
  },
}));

export type TooltipTriggerBreakpointProp = number | null | undefined;

export interface FilterButtonProps {
  children: React.ReactNode;
  filterName: string;
  selectedFilterText: string;
  filterNameSuffix?: string;
  isActive?: boolean;
  onBackdropClick?: () => void;
  onFilterOpen?: () => void;
  onFilterClosed?: () => void;
  disabled: boolean;
  tooltipTriggerBreakpoint?: TooltipTriggerBreakpointProp;
}

const FilterButton = forwardRef(
  (
    {
      children,
      filterName,
      selectedFilterText = '',
      filterNameSuffix = ':',
      onBackdropClick,
      onFilterOpen = () => {},
      onFilterClosed = () => {},
      isActive = false,
      disabled = false,
      tooltipTriggerBreakpoint = null,
    }: Partial<FilterButtonProps>,
    ref
  ) => {
    const classes = useStyles();
    const theme: MTheme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClose = (): void => {
      setAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    useImperativeHandle(ref, () => ({
      handleClose,
    }));

    useEffect(() => {
      if (open) {
        onFilterOpen();
      } else {
        onFilterClosed();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
      <>
        <Button
          disabled={disabled}
          data-testid="filter-button"
          ref={ref as Ref<HTMLButtonElement>}
          className={clsx(classes.filterButton, open && 'open', isActive && 'active')}
          color="inherit"
          variant="text"
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          onClick={handleClick}
          sx={{ maxWidth: tooltipTriggerBreakpoint || 'initial' }}
        >
          <Typography
            className={classes.filterName}
            sx={{ ...theme.typography.body5 }}
            data-testid={`${filterName}-filter`}
          >
            {filterName}
            {filterNameSuffix}
          </Typography>
          <OverflowTooltip title={selectedFilterText} arrow>
            <Typography
              display="inline"
              sx={{ ...theme.typography.body5 }}
              color="primary"
              data-testid="selected-filter-text"
            >
              {`\u00a0${selectedFilterText}`}
            </Typography>
          </OverflowTooltip>
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          keepMounted
          onBackdropClick={onBackdropClick}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Box sx={{ p: 1 }}>{children}</Box>
        </Popover>
      </>
    );
  }
);

export default FilterButton;
