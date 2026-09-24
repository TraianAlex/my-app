// @ts-nocheck
import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('render landing page', async () => {
  const promise = Promise.resolve();
  render(<App />);

  const label = screen.getByText(/Max difference in labels:/i);
  expect(label).toBeInTheDocument();
  await act(async () => {
    await promise;
  });
});
