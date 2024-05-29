import React from 'react';
import { Box, Tab, Tabs, TabsProps, styled } from '@mui/material';

const TabsContainerStyled = styled(Box)<Partial<MTabsProps>>(({ theme, size }) => ({
  '& .MuiTabs-flexContainer': {
    borderBottom: `2px solid ${theme.palette.ui.mutedSoft}`,
  },
  ...(size === 'medium'
    ? {
        '& .MuiTabs-indicator': {
          bottom: 6,
        },
      }
    : {}),
}));

const TabStyled = styled(Tab)<{ selected: boolean; size: 'medium' | 'large' }>(({ theme, selected, size }) => ({
  ...(size === 'medium' ? { ...theme.typography.textMedium, minHeight: 40 } : theme.typography.xLargeMedium),
  padding: theme.spacing(1, 2),
  marginRight: 0,
  borderRadius: 0,
  color: selected ? theme.palette.ui.brandActive : theme.palette.ui.mutedDark,
  '&:hover': {
    backgroundColor: theme.palette.ui.mutedHover,
  },
  '& svg > path': {
    fill: selected ? theme.palette.ui.brandActive : theme.palette.ui.mutedShady,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      data-testid={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yAndOtherProps(tab: TabContent, index: number): Record<string, string | JSX.Element | undefined> {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
    'data-testid': `tab-title-${index}`,
    iconPosition: 'start',
    icon: tab.icon ?? undefined,
  };
}

export interface TabContent {
  title: string;
  icon: JSX.Element | null;
  content: JSX.Element | null;
}

export interface MTabsProps extends TabsProps {
  tabs: TabContent[];
  className?: string;
  size?: 'medium' | 'large';
}

const MTabs = ({ value, onChange, className = '', tabs, size = 'large', ...props }: MTabsProps): JSX.Element => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setCurrentTab(newValue);
  };

  return (
    <Box className={className} data-testid="tabs-container">
      <TabsContainerStyled size={size}>
        <Tabs
          {...props}
          variant="scrollable"
          scrollButtons="auto"
          value={value ?? currentTab}
          onChange={onChange ?? handleChange}
          aria-label="tabs"
        >
          {tabs.map((tab, index) => (
            <TabStyled
              size={size}
              key={tab.title}
              label={tab.title}
              selected={index === (value ?? currentTab)}
              {...a11yAndOtherProps(tab, index)}
            />
          ))}
        </Tabs>
      </TabsContainerStyled>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.title} value={value ?? currentTab} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};
export default MTabs;
