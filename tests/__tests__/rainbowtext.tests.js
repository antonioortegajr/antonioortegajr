import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RainbowText from '../../components/RainbowText';

describe("RainbowText Component", () => {
  it("renders the string passed in the text prop", () => {
    render(<RainbowText text="hello world" />);
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });

  it("carries the rainbow class", () => {
    render(<RainbowText text="hello world" />);
    const element = screen.getByText("hello world");
    expect(element).toHaveClass('rainbow');
  });

  it("renders without crashing when text is not passed", () => {
    render(<RainbowText />);
  });
});
