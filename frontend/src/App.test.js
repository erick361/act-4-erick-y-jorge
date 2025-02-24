// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Registro e Inicio de Sesión', () => {
  render(<App />);
  const headingElement = screen.getByText(/Registro e Inicio de Sesión/i);
  expect(headingElement).toBeInTheDocument();
});
