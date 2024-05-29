import { Box, Popover, styled } from '@mui/material';

export const LinkItemStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderLeft: `5px solid ${theme?.palette.ui.mutedHover}`,
  backgroundColor: theme?.palette.ui.mutedHover,

  marginRight: 0,
  '&.active': {
    color: theme?.palette.ui.brand,
    backgroundColor: theme?.palette.ui.light,
    borderLeft: `5px solid ${theme?.palette.ui.brand}`,
    '& svg > path': {
      fill: theme.palette.ui.brand,
    },
  },
  '&:hover': {
    borderLeft: `5px solid transparent`,
  },
  textDecoration: 'none',
  textAlign: 'center',
}));

export const RootLinkItemStyled = styled(LinkItemStyled)<{ disabled?: boolean }>(({ theme }) => ({
  justifyContent: 'center',
  width: '100%',
  height: 88,
  flexDirection: 'column',
  color: theme?.palette.ui.mutedDark,
  '& .MuiListItemIcon-root': {
    marginRight: 0,
  },
  '& svg > path': {
    fill: theme.palette.ui.mutedDark,
  },
  '&:hover': {
    backgroundColor: theme.palette.ui.mutedDoubleHover,
    '& svg > path': {
      fill: theme?.palette.ui.mutedDark,
    },
    '& .MuiTypography-root': {
      color: theme?.palette.ui.mutedDark,
    },
  },
}));

export const SubitemsNavLinkContainerStyled = styled(Popover)(({ theme }) => ({
  pointerEvents: 'none',
  '& .MuiPaper-root': {
    pointerEvents: 'auto',
    backgroundColor: theme?.palette.ui.mutedSoft,
    minWidth: 280,
    margin: 0,
    borderRadius: 0,
  },
}));

export const SubitemNavLinkStyled = styled(LinkItemStyled)(({ theme }) => ({
  height: 48,
  color: theme.palette.ui.brandDark,
  padding: theme.spacing(1.75, 0, 1.75, 3.5),
  backgroundColor: theme.palette.ui.mutedSoft,
  '& .MuiSvgIcon-root': {
    marginRight: 16,
  },
  '& svg > path': {
    fill: theme.palette.ui.mutedShady,
  },
  '&:hover': {
    backgroundColor: theme.palette.ui.mutedHover,
  },
  '&.active': {
    '&:hover': {
      '& svg > path': {
        fill: theme.palette.ui.mutedShady,
      },
      '& .MuiTypography-root': {
        color: theme.palette.ui.brandDark,
      },
    },
  },
}));
