import { getByText, render, screen } from '@testing-library/react';
import React from 'react';
import GreyButton from './Button';

describe('Grey Button', () => {
  it('renders', () => {
    const text_on_button = 'Click me';
    render(<GreyButton textOnButton={text_on_button} />);
    const button = screen.getByText(/click me/i);
    expect(button).toBeDefined();
  });
});
