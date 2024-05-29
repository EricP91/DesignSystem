import { makeStyles, useTheme } from '@mui/styles';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import ActionCard from '../../Card/ActionCard/ActionCard';
import { ReportIcon } from '../../../assets/icons';
import { MButtonProps } from '../../Button/MButton';
import { MTheme } from '../../../theme';
import MLabel from '../../Label/MLabel';

export const buttonWidth = 215;

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 16,
  },
  reportIcon: {
    marginBottom: theme.spacing(3),
    height: 86,
    width: 117,
  },
  primaryButton: {
    width: buttonWidth,
    height: 32,
    padding: (theme.spacing(0.5), theme.spacing(2)),
  },
  secondaryButton: {
    width: buttonWidth,
    height: 32,
    marginTop: theme.spacing(1),
  },
  betaLabel: {
    alignSelf: 'flex-end',
  },
}));
export interface ReportGenerationCardProps {
  title?: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonLoading: boolean;
  secondaryButtonLoading: boolean;
  primaryButtonProps?: Partial<MButtonProps>;
  secondaryButtonProps?: Partial<MButtonProps>;
  showBetaLabel?: boolean;
  betaLabelText?: string;
}
function ReportGenerationCard({
  primaryButtonText,
  secondaryButtonText,
  primaryButtonProps,
  primaryButtonLoading = false,
  secondaryButtonLoading = false,
  secondaryButtonProps,
  showBetaLabel,
  betaLabelText = 'Beta',
}: Partial<ReportGenerationCardProps>): JSX.Element {
  const classes = useStyles();
  const currentTestId = `${secondaryButtonText ? 'double' : 'single'}-button-report-card`;
  const theme: MTheme = useTheme();
  const quickReportButtonTestId = `${primaryButtonText?.split(' ').join('-').toLowerCase()}-button`;
  const crossViewReportButtonTestId = `${secondaryButtonText?.split(' ').join('-').toLowerCase()}-button`;

  return (
    <ActionCard data-testid={currentTestId} className={classes.root}>
      {showBetaLabel && (
        <MLabel data-testid="beta-label" className={classes.betaLabel} backgroundColor={theme.palette.grey[1500]}>
          {betaLabelText}
        </MLabel>
      )}
      <ReportIcon className={classes.reportIcon} />
      <LoadingButton
        loading={primaryButtonLoading}
        className={classes.primaryButton}
        variant="contained"
        color="primary"
        size="small"
        data-testid={quickReportButtonTestId}
        id={quickReportButtonTestId}
        {...primaryButtonProps}
      >
        {primaryButtonText}
      </LoadingButton>
      {secondaryButtonText ? (
        <LoadingButton
          loading={secondaryButtonLoading}
          className={classes.secondaryButton}
          variant="outlined"
          color="primary"
          size="small"
          data-testid={crossViewReportButtonTestId}
          id={crossViewReportButtonTestId}
          {...secondaryButtonProps}
        >
          {secondaryButtonText}
        </LoadingButton>
      ) : null}
    </ActionCard>
  );
}
export default ReportGenerationCard;
