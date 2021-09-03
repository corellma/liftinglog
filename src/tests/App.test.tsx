import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('app renders navbar', () => {
  render(<App />);
  expect(screen.getByText('Lifting Log')).toBeInTheDocument()
});
