import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../../pages/404';

describe("404 Page", () => {
  it("renders a link back to the home page", () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { href: '/' });
    expect(link).toBeInTheDocument();
  });

  it("displays the 404 heading", () => {
    render(<NotFound />);
    const heading = screen.getByText(/^404$/);
    expect(heading).toBeInTheDocument();
  });

  it("shows an AI badge image", () => {
    render(<NotFound />);
    const img = screen.getByAltText(/404/i);
    expect(img).toHaveAttribute('src', /aibadge.org/);
  });
});
