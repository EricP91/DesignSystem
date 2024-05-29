import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeConfig } from '../theme';

const AllTheProviders: FC = ({ children }): JSX.Element => <ThemeConfig isLightMode>{children}</ThemeConfig>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
