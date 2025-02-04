import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../pages/index';

// these tests are all AI generated

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

it("displays the main heading with correct name", () => {
render(<Home />);
// Check for the main heading with the name
const heading = screen.getByRole('heading', { name: /Antonio Ortega Jr/i });
    expect(heading).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

// Optional: 404 Page tests if a 404 page exists
let NotFound;
try {
  NotFound = require('../../pages/404').default;
} catch (err) {
  // No custom 404 page exists, so skip these tests.
}

if (NotFound) {
  describe("404 Page", () => {
    it("renders without crashing", () => {
      render(<NotFound />);
    });

    it("displays a 404 error message", () => {
      render(<NotFound />);
      // This assumes your custom 404 page includes '404' in its rendered content.
      const errorMessage = screen.getByText(/^404$/i);
      expect(errorMessage).toBeInTheDocument();
    });

    it("matches the snapshot", () => {
      const { container } = render(<NotFound />);
      expect(container).toMatchSnapshot();
    });
  });
}
