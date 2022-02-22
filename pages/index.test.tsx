import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  it('Has greetings', () => {
    render(<Home />);

    const greetingsDom = screen.getByText('index.greetings');

    expect(greetingsDom).toBeInTheDocument();
  });
});
