// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

it('render landing page', () => {
  act(() => render(<App />));

  const label = screen.getByText(/Max difference in labels:/i);
  expect(label).toBeInTheDocument();
});
