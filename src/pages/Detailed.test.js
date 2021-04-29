import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Detailed from './Detailed';

test('renders speed skating button', () => {

  render(<Detailed />);
  const buttonElement = screen.getByText(/Speed Skating/i);
  expect(buttonElement).toBeInTheDocument();
});

test('on click open a table', () => {

  render(<Detailed />);
  userEvent.click(screen.getByText(/Speed Skating/i))
  expect(screen.getByText(/Medal table/i)).toBeInTheDocument()
});


