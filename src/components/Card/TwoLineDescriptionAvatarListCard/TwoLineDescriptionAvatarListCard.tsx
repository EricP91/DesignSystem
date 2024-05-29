import { makeStyles } from '@mui/styles';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { MTheme } from '../../../theme';
import TitleCard from '../TitleCard/TitleCard';
import TwoLineDescriptionAvatar, { AvatarWithIcon } from '../../TwoLineDescriptionAvatar';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    '& .MuiListItem-root': {
      paddingLeft: 0,
    },
  },
  item: {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

export interface TwoLineDescriptionAvatarListCardProps {
  title: string;
  twoLineDescriptionAvatarList: AvatarWithIcon[];
  highlight?: string;
}

function TwoLineDescriptionAvatarListCard({
  twoLineDescriptionAvatarList,
  title,
  highlight,
}: TwoLineDescriptionAvatarListCardProps): JSX.Element {
  const classes = useStyles();
  return (
    <TitleCard title={title}>
      {twoLineDescriptionAvatarList.map((twoLineDescriptionAvatar: AvatarWithIcon) => (
        <div key={uuid()} className={classes.item}>
          <TwoLineDescriptionAvatar
            primaryTextMaxWidth="100%"
            secondaryTextMaxWidth="100%"
            className="primary"
            highlight={highlight}
            {...twoLineDescriptionAvatar}
          >
            {twoLineDescriptionAvatar.children}
          </TwoLineDescriptionAvatar>
        </div>
      ))}
    </TitleCard>
  );
}

export default TwoLineDescriptionAvatarListCard;
