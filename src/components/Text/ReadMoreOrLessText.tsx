import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';

export interface ReadMoreOrLessTextProps {
  text: string;
  maxLetters: number;
  showMore?: string;
  showLess?: string;
  textWrapper?: (children: string) => JSX.Element;
  dataTestId?: string;
}

interface StyleProps {
  isReadMore: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  button: (props: StyleProps) => ({
    textAlign: 'right',
    marginTop: props.isReadMore ? 0 : '1em',
    display: props.isReadMore ? 'inline' : 'block',
    marginLeft: theme.spacing(1.25),
    cursor: 'pointer',
    color: theme.palette.primary.main,
  }),
  root: {
    width: '100%',
    minWidth: 200,
    maxWidth: 370,
  },
  readMoreWrapper: {
    wordWrap: 'break-word',
  },
}));

const ReadMoreOrLessText = ({
  text,
  maxLetters = 45,
  showMore = 'Show more',
  showLess = 'Show less',
  textWrapper = (children: string) => <span>{children}</span>,
  dataTestId = 'read-more-less-text-box',
}: ReadMoreOrLessTextProps): JSX.Element => {
  const [isReadMore, setIsReadMore] = useState(true);
  const classes = useStyles({ isReadMore });
  const toggleReadMore = (): void => {
    setIsReadMore(!isReadMore);
  };
  const isLongerThanMaxLetters = text.length > maxLetters;
  return (
    <Box dir="auto" className={classes.root} data-testid={dataTestId}>
      {isLongerThanMaxLetters ? (
        <Typography variant="body2" component="div" display="inline" className={classes.readMoreWrapper}>
          {isReadMore ? textWrapper(`${text.slice(0, maxLetters)}...`) : textWrapper(text)}
          <Box component="span" onClick={toggleReadMore} className={classes.button} data-testid="read-more-less-button">
            {isReadMore ? showMore : showLess}
          </Box>
        </Typography>
      ) : (
        textWrapper(text)
      )}
    </Box>
  );
};

export default ReadMoreOrLessText;
