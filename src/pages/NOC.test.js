import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NOC from './NOC';

test('renders speed skating button', () => {

  render(<NOC />);
  const teamNetherlands = screen.getByText(/Netherlands/i);
  expect(teamNetherlands).toBeInTheDocument();
});

it('renders NOC correctly', () => {
  const tree = renderer
    .create(<NOC />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
