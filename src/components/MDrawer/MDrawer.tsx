import * as React from 'react';
import { forwardRef, MutableRefObject, useEffect } from 'react';
import { Box, Drawer, DrawerProps, useTheme } from '@mui/material';
import { DrawerToggleIcon } from '../../assets/icons';

export interface MDrawerProps extends Omit<DrawerProps, 'css'> {
  drawerWidth: number;
  open?: boolean;
  onOpenChange?: (value: boolean) => void | undefined;
}
const MDrawer = forwardRef(
  ({ drawerWidth, children, open = false, onOpenChange, ...otherProps }: MDrawerProps, ref): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState<boolean>(open);
    const theme = useTheme();

    const enterScreenTransition = theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    });
    const leaveScreenTransition = theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    });

    useEffect(() => {
      if (open !== isOpen) setIsOpen(open);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const toggleDrawer = (): void => {
      if (onOpenChange) {
        onOpenChange(!isOpen);
      } else {
        setIsOpen(!isOpen);
      }
    };

    const transformX = isOpen ? `translateX(${drawerWidth}px)` : 'translateX(0)';
    const rotateDegree = isOpen ? 180 : 0;

    return (
      <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
        <Box
          onClick={toggleDrawer}
          sx={{
            transition: isOpen ? enterScreenTransition : leaveScreenTransition,
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            height: 56,
            width: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            position: 'relative',
            top: '50%',
            transform: `translateY(-50%) ${transformX}`,
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          <DrawerToggleIcon
            data-testid="toggle-icon"
            sx={{ height: 14, width: 8, transform: `rotate(${rotateDegree}deg)` }}
          />
        </Box>
        <Drawer
          variant="persistent"
          anchor="left"
          open={isOpen}
          PaperProps={{ style: { position: 'absolute', width: drawerWidth } }}
          SlideProps={{ container: (ref as MutableRefObject<HTMLElement>)?.current, style: { position: 'absolute' } }}
          {...otherProps}
        >
          {children}
        </Drawer>
      </Box>
    );
  }
);
export default MDrawer;
