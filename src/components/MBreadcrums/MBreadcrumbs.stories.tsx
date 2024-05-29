import { Story } from '@storybook/react';
import React from 'react';
import { DashboardIcon } from '../../assets/icons';
import MBreadcrumbs, { MBreadCrumbsProp } from './MBreadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
};

const Template: Story<MBreadCrumbsProp> = (args) => <MBreadcrumbs {...args} />;

export const Breadcrumbs = Template.bind({});

Breadcrumbs.args = {
  links: [
    { name: 'Dashboard', href: '', icon: <DashboardIcon /> },
    { name: 'Assignment #804', href: '' },
  ],
};
