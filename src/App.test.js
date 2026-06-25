import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio navigation', () => {
  window.history.pushState({}, '', '/');

  render(<App />);

  expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /resume/i })).toBeInTheDocument();
});

test('renders the resume pdf page on the resume route', () => {
  window.history.pushState({}, '', '/resume');

  render(<App />);

  expect(screen.getByRole('heading', { name: /resume 2026/i })).toBeInTheDocument();
  expect(screen.getByTitle(/resume 2026/i)).toBeInTheDocument();
});
