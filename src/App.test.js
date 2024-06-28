// App.test.js

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders navbar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const heroElement = screen.getByText(/manage your expenses/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders track page', () => {
  render(
    <MemoryRouter initialEntries={['/track']}>
      <App />
    </MemoryRouter>
  );
  const addExpenseButton = screen.getByText(/add expense/i);
  expect(addExpenseButton).toBeInTheDocument();
});
