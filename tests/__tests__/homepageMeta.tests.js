import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../pages/index';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>
}));

describe("Home Page metadata", () => {
  it("renders valid ProfilePage JSON-LD", () => {
    const { container } = render(<Home />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();

    const data = JSON.parse(script.innerHTML);
    expect(data['@type']).toBe('ProfilePage');
    expect(data.mainEntity['@type']).toBe('Person');
    expect(data.mainEntity.image).toBe('https://antonioortegajr.com/me_ivy.png');
  });

  it("renders Open Graph image meta tag", () => {
    const { container } = render(<Home />);
    const ogImage = container.querySelector('meta[property="og:image"]');
    expect(ogImage).toHaveAttribute('content', 'https://antonioortegajr.com/me_ivy.png');
  });
});
