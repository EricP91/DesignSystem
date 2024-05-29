import React from 'react';
import { styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import MButton from '../Button/MButton';
import { InfoIcon } from '../../assets/icons';
import { MUIStyled } from '../../theme';
import EmailNotification, { EmailNotificationProps } from './EmailNotification';

const DetailsTable = styled(Table)<MUIStyled>(({ theme }) => ({
  width: '100%',
  borderSpacing: '0',
  borderCollapse: 'separate',
  color: theme.palette.grey[1500],
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '9px',
  margin: theme.spacing(0, 0, 4),
}));

const DetailsDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const DetailsTypography = styled(Typography)<MUIStyled>(({ theme }) => ({
  color: theme.palette.grey[600],
}));

interface DetailsItem {
  key: string;
  value: string;
}

export interface ReportEmailNotificationProps extends EmailNotificationProps {
  details: DetailsItem[];
  btnLabel: string;
  btnNavigationUrl: string;
}

const renderLoginButton = (btnLabel: string, btnNavigationUrl: string): JSX.Element => (
  <MButton variant="contained" size="large" sx={{ marginLeft: '-2px' }} onClick={() => window.open(btnNavigationUrl)}>
    <Typography variant="textMedium">{btnLabel}</Typography>
  </MButton>
);

const renderDetailsRows = (details: DetailsItem[]): JSX.Element[] =>
  details.map((item: DetailsItem) => (
    <TableRow key={item.key}>
      <TableCell>
        <DetailsDiv>
          <InfoIcon fill="#8E9EAE" />
          <span>
            <DetailsTypography variant="body2">{item.key}:</DetailsTypography>
          </span>
          <span>
            <DetailsTypography variant="subtitle2">&nbsp;{item.value}</DetailsTypography>
          </span>
        </DetailsDiv>
      </TableCell>
    </TableRow>
  ));

const renderDetailsTable = (details: DetailsItem[]): JSX.Element => (
  <DetailsTable>
    <TableBody>{renderDetailsRows(details)}</TableBody>
  </DetailsTable>
);

const renderContent = (details: DetailsItem[], btnLabel: string, btnNavigationUrl: string): JSX.Element => {
  const detailsTable = renderDetailsTable(details);
  const loginBtn = renderLoginButton(btnLabel, btnNavigationUrl);

  return (
    <div>
      {detailsTable}
      {loginBtn}
    </div>
  );
};

function ReportEmailNotification({
  logo,
  header,
  image,
  title,
  description,
  details,
  btnLabel,
  btnNavigationUrl,
  footer,
}: ReportEmailNotificationProps): JSX.Element {
  const content = renderContent(details, btnLabel, btnNavigationUrl);

  return (
    <EmailNotification
      logo={logo}
      header={header}
      image={image}
      title={title}
      description={description}
      content={content}
      footer={footer}
    />
  );
}

export default ReportEmailNotification;
