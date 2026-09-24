// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// plotly.js expects URL.createObjectURL in jsdom
if (typeof window.URL.createObjectURL === 'undefined') {
  window.URL.createObjectURL = jest.fn(() => 'blob:mock');
}
if (typeof window.URL.revokeObjectURL === 'undefined') {
  window.URL.revokeObjectURL = jest.fn();
}