import { styled } from '@mui/material/styles';
import MTabs from './MTabs';

const FolderTabs = styled(MTabs)(({ theme }) => ({
  '& > .MuiBox-root': {
    border: `1px solid ${theme.palette.ui.mutedSoft}`,
    padding: theme.spacing(2),
  },
  '& > .MuiBox-root:first-of-type': {
    border: 'none',
    padding: 0,
    '& .MuiTab-root': {
      ...theme.typography.largeBold,
      padding: theme.spacing(0, 3),

      backgroundColor: theme.palette.ui.mutedSoft,
      '&:hover': {
        backgroundColor: theme.palette.ui.mutedHover,
      },
      borderRadius: theme.spacing(1, 1, 0, 0),
      borderTop: `1px solid transparent`,
      borderRight: `1px solid transparent`,
      borderLeft: `1px solid transparent`,
    },

    '.MuiTabs-flexContainer': {
      border: 'none',
      height: 56,
    },
    '.MuiTabs-indicator': {
      display: 'none',
    },

    '.Mui-selected': {
      borderTop: `1px solid ${theme.palette.ui.mutedSoft}`,
      borderRight: `1px solid ${theme.palette.ui.mutedSoft}`,
      borderLeft: `1px solid ${theme.palette.ui.mutedSoft}`,
      color: theme.palette.ui.brand,
      backgroundColor: theme.palette.ui.light,
    },
  },
}));

export default FolderTabs;
