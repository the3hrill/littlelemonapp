import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route } from 'react-router-dom';
import SecondMain from './SecondMain';

describe('SecondMain', () => {
  test('renders header component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/" element={<SecondMain />} />
      </MemoryRouter>
    );

    const headerElement = screen.getByText(/header/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders reservations component with available times', () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <Route path="/reservations" element={<SecondMain />} />
      </MemoryRouter>
    );

    const reservationsElement = screen.getByText(/reservations/i);
    expect(reservationsElement).toBeInTheDocument();

    const availableTimesElement = screen.getByText(/available times/i);
    expect(availableTimesElement).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('submits form and navigates to confirmed page', async () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <Route path="/reservations" element={<SecondMain />} />
        <Route path="/confirmed" element={<div>Confirmed Page</div>} />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Simulate API response delay
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const confirmedPageElement = screen.getByText(/confirmed page/i);
    expect(confirmedPageElement).toBeInTheDocument();
  });
});
