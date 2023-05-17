import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn how to React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3.0', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn how to React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3.0', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn how to React/i);
  expect(linkElement).toBeInTheDocument();
});
