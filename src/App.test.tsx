import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('tests in app component:', () => {
  render(<App />);
  const text = screen.getByText('in');
  expect(text).toBeInTheDocument();
});
