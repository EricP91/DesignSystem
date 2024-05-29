import React from 'react';
import { Divider, List } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { v4 as uuid } from 'uuid';
import { MTheme } from '../../../theme';
import ValueDescriptionDividerAvatarListItem, {
  ValueDescriptionDividerAvatarListItemProps,
} from '../../ListItem/ValueDescriptionDividerAvatarListItem/ValueDescriptionDividerAvatarListItem';

const useStyles = makeStyles((theme: MTheme) => ({
  divider: {
    margin: theme.spacing(2.5, -4),
    color: theme.palette.grey[500],
  },
}));

export interface ValueDescriptionDividerAvatarListProps {
  valueDescriptionDividerAvatarListItems: ValueDescriptionDividerAvatarListItemProps[];
  highlight?: string;
}

function ValueDescriptionDividerAvatarList({
  valueDescriptionDividerAvatarListItems,
  highlight,
}: ValueDescriptionDividerAvatarListProps): JSX.Element {
  const classes = useStyles();

  const isLastItem = (index: number): boolean => index === valueDescriptionDividerAvatarListItems.length - 1;

  return (
    <List>
      {valueDescriptionDividerAvatarListItems.map(
        (valueDescriptionDividerAvatarListItem: ValueDescriptionDividerAvatarListItemProps, index) => (
          <div key={uuid()}>
            <ValueDescriptionDividerAvatarListItem {...valueDescriptionDividerAvatarListItem} highlight={highlight} />
            {!isLastItem(index) && <Divider className={classes.divider} />}
          </div>
        )
      )}
    </List>
  );
}

export default ValueDescriptionDividerAvatarList;
