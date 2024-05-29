import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { MTheme } from '../../../theme';
import ValueDescriptionDivider, {
  ValueDescriptionDividerProps,
} from '../../ValueDescriptionDivider/ValueDescriptionDivider';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    '& .MuiListItemAvatar-root': {
      alignSelf: 'baseline',
      '& .MuiAvatar-root': {
        fontSize: 48,
        width: 48,
        height: 48,
        backgroundColor: `${theme.palette.grey[500]}1E`,
        '& .MuiSvgIcon-root': {
          '& path': {
            fill: theme.palette.primary.main,
          },
        },
      },
    },
  },
  listItem: {
    marginBottom: theme.spacing(0.5),
  },
  list: {
    marginTop: theme.spacing(1.375),
  },
  single: {
    alignItems: 'center',
  },
}));

export interface ValueDescriptionDividerAvatarListItemProps {
  valueDescriptionDividerItems: ValueDescriptionDividerProps[];
  icon: JSX.Element;
  iconTooltipText?: string;
  highlight?: string;
}

function ValueDescriptionDividerAvatarListItem({
  icon,
  iconTooltipText = '',
  valueDescriptionDividerItems,
  highlight,
}: ValueDescriptionDividerAvatarListItemProps): JSX.Element {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Tooltip title={iconTooltipText} arrow placement="top">
          <Avatar data-testid="avatar">{icon}</Avatar>
        </Tooltip>
      </ListItemAvatar>
      <ListItemText
        data-testid="list-item-text"
        className={clsx(valueDescriptionDividerItems.length > 1 ? classes.list : classes.single)}
        primary={
          <>
            {valueDescriptionDividerItems.map((valueDescriptionDividerItem: ValueDescriptionDividerProps) => (
              <ValueDescriptionDivider
                key={`${valueDescriptionDividerItem.value}${valueDescriptionDividerItem.description}`}
                className={classes.listItem}
                highlight={highlight}
                {...valueDescriptionDividerItem}
              />
            ))}
          </>
        }
      />
    </ListItem>
  );
}

export default ValueDescriptionDividerAvatarListItem;
