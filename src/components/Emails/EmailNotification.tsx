import React from 'react';
import { styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CellebriteLogo } from '../../assets/logos';
import { MUIStyled } from '../../theme';

const MainDiv = styled('div')<MUIStyled>(({ theme }) => ({
  width: '608px',
  margin: 'auto',
  background: theme.palette.grey[0],
  padding: theme.spacing(0, 4),
  borderRadius: '8px',
  borderStyle: 'none',
}));

const MainTable = styled(Table)<MUIStyled>(({ theme }) => ({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: theme.spacing(0, 4),
  '& .MuiTableCell-root': {
    padding: '0',
  },
  '& .MuiTableCell-root:last-child': {
    paddingRight: '0',
  },
  '& .MuiTableCell-root:first-child': {
    paddingLeft: '0',
  },
}));

const TitleTable = styled(Table)(() => ({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0',
}));

const MutedDarkTypography = styled(Typography)<MUIStyled>(({ theme }) => ({
  color: theme.palette.grey[1500],
}));

const BrandDarkTypography = styled(Typography)<MUIStyled>(({ theme }) => ({
  color: theme.palette.grey[1300],
}));

export interface EmailNotificationProps {
  logo?: React.ReactNode;
  header: string;
  image: React.ReactNode;
  title: string;
  description: string;
  content?: React.ReactNode;
  footer: string;
}

function EmailNotification({
  logo,
  header,
  image,
  title,
  description,
  content,
  footer,
}: EmailNotificationProps): JSX.Element {
  return (
    <MainDiv>
      <MainTable>
        <TableBody>
          <TableRow>
            <TableCell>
              <Box>{!logo ? <CellebriteLogo /> : logo}</Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <BrandDarkTypography variant="xLargeMedium">{header}</BrandDarkTypography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Box>{image}</Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TitleTable role="presentation">
                <TableBody>
                  <TableRow>
                    <TableCell style={{ paddingBottom: '16px' }}>
                      <BrandDarkTypography variant="xxLargeBold">{title}</BrandDarkTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <MutedDarkTypography variant="body1">{description}</MutedDarkTypography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TitleTable>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{content}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <MutedDarkTypography variant="body1">{footer}</MutedDarkTypography>
              <MutedDarkTypography variant="body1">Do not forward this email.</MutedDarkTypography>
            </TableCell>
          </TableRow>
        </TableBody>
      </MainTable>
    </MainDiv>
  );
}

export default EmailNotification;
