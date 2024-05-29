// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

window.ResizeObserver = ResizeObserver;
jest.mock(
  'react-virtualized-auto-sizer',
  () =>
    ({ children }) =>
      children({ height: 600, width: 600 })
);
