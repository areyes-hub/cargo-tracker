import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

test('renders login form and submits', () => {
  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@test.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
  fireEvent.click(screen.getByText('Login'));
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
});
