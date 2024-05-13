import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders form with initial values', () => {
    render(<BookingForm />);

    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput.value).toBe('');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput.value).toBe('1');

    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput.value).toBe(new Date().toISOString().split('T')[0]);

    const timeSelect = screen.getByLabelText(/select a time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect.value).toBe('');

    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect.value).toBe('birthday');
  });

  test('updates form values on user input', () => {
    render(<BookingForm />);

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '2' } });
    expect(guestsInput.value).toBe('2');

    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    expect(dateInput.value).toBe('2022-01-01');

    const timeSelect = screen.getByLabelText(/select a time/i);
    fireEvent.change(timeSelect, { target: { value: '12:00 PM' } });
    expect(timeSelect.value).toBe('12:00 PM');

    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: 'anniversary' } });
    expect(occasionSelect.value).toBe('anniversary');
  });

  test('submits form and shows success message', () => {
    render(<BookingForm />);

    const submitButton = screen.getByRole('button', {
      name: /submit reservation/i,
    });
    fireEvent.click(submitButton);

    // You can add assertions here to check if the form submission was successful
    // For example, you can assert that an alert with the success message is shown
    // You can use a mocking library like jest.mock() to mock the submitAPI function
  });
});
