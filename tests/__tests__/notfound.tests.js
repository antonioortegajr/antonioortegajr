import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../../pages/404';

describe("404 Page", () => {
  it("renders a link back to the home page", () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /go back home/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it("displays the 404 heading", () => {
    render(<NotFound />);
    const heading = screen.getByText(/^404$/);
    expect(heading).toBeInTheDocument();
  });


});
