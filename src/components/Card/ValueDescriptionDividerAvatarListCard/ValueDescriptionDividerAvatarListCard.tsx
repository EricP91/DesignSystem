import React from 'react';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../../theme';
import TitleCard from '../TitleCard/TitleCard';
import ValueDescriptionDividerAvatarList, {
  ValueDescriptionDividerAvatarListProps,
} from '../../List/ValueDescriptionDividerAvatarList/ValueDescriptionDividerAvatarList';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    '& .MuiListItem-root': {
      paddingLeft: 0,
    },
  },
  title: {
    margin: theme.spacing(0, 0, 2, 4),
  },
}));

export interface ValueDescriptionDividerAvatarListCardProps {
  title: string;
  valueDescriptionDividerAvatarList: ValueDescriptionDividerAvatarListProps;
  highlight?: string;
}

function ValueDescriptionDividerAvatarListCard({
  valueDescriptionDividerAvatarList,
  title,
  highlight,
}: ValueDescriptionDividerAvatarListCardProps): JSX.Element {
  const classes = useStyles();
  return (
    <TitleCard className={classes.root} title={title}>
      <ValueDescriptionDividerAvatarList {...valueDescriptionDividerAvatarList} highlight={highlight} />
    </TitleCard>
  );
}

export default ValueDescriptionDividerAvatarListCard;
