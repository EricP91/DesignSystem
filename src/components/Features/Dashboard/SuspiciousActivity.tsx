import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, IconButton, Popover, Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useState } from 'react';

import { InfoIcon } from '../../../assets/icons/InfoIcon';
import { MTheme } from '../../../theme';
import CustomWidthTooltip, { CustomTooltipProps } from '../../Tooltip/CustomWidthTooltip';

const useStyles = makeStyles((theme: MTheme) => ({
  iconButton: {
    cursor: 'auto',
    backgroundColor: '#FAD9D9',
    '&:hover': {
      backgroundColor: '#FAD9D9',
    },
    '&.empty': {
      backgroundColor: theme.palette.blue[300],
      '&:hover': {
        backgroundColor: theme.palette.blue[300],
      },
    },
  },
  countText: {
    fontSize: theme.spacing(5),
    fontWeight: 700,
    lineHeight: theme.spacing(5),
    color: '#FF4A40',
    '&.empty': {
      color: theme.palette.grey[1700],
    },
  },
  labelText: {
    fontSize: theme.spacing(1.75),
    fontWeight: 500,
    lineHeight: theme.spacing(3),
    color: theme.palette.grey[1500],
  },
}));

export interface SuspiciousActivityProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  isLoading?: boolean;
  isEmpty?: boolean;
  action?: React.ReactNode;
  infoTooltip?: string;
  dropDownContent?: React.ReactNode;
  customContent?: React.ReactNode;
  tooltipProps?: CustomTooltipProps;
}

function SuspiciousActivity({
  icon,
  count,
  isLoading = false,
  isEmpty = false,
  action,
  label,
  infoTooltip,
  dropDownContent,
  customContent,
  tooltipProps,
}: SuspiciousActivityProps): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isPopoverOpen = Boolean(anchorEl);
  const popoverId = isPopoverOpen ? 'button-popover' : undefined;

  const openPopover = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = (): void => {
    setAnchorEl(null);
  };

  return (
    <div data-testid="suspicious-activity-container">
      {isLoading ? (
        <Skeleton variant="circular" height="34px" width="34px" />
      ) : (
        <IconButton className={clsx(classes.iconButton, isEmpty && 'empty')} size="small" disableRipple>
          {icon}
        </IconButton>
      )}
      <Box mt={2} display="flex" alignItems="center">
        <Typography
          data-testid="suspicious-activity-count-text"
          className={clsx(classes.countText, isEmpty && 'empty')}
        >
          {isLoading ? <Skeleton variant="text" width="40px" /> : count}
        </Typography>
        {action !== undefined && action}
      </Box>
      <Box mt={1} display="flex" alignItems="center">
        <Typography data-testid="suspicious-activity-label" className={classes.labelText}>
          {isLoading ? <Skeleton variant="text" width="150px" /> : label}
        </Typography>
        {!isLoading && infoTooltip && (
          <CustomWidthTooltip title={infoTooltip} tooltipProps={tooltipProps}>
            <IconButton data-testid="suspicious-activity-info-button" size="small">
              <InfoIcon fill="#5E6974" />
            </IconButton>
          </CustomWidthTooltip>
        )}
        {!isLoading && dropDownContent && (
          <>
            <IconButton
              data-testid="suspicious-activity-dropdown-button"
              size="small"
              aria-describedby={popoverId}
              onClick={openPopover}
            >
              {isPopoverOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>

            <Popover
              id={popoverId}
              open={isPopoverOpen}
              anchorEl={anchorEl}
              onClose={closePopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {dropDownContent}
            </Popover>
          </>
        )}
        {!isLoading && customContent !== undefined ? customContent : null}
      </Box>
    </div>
  );
}

export default SuspiciousActivity;
