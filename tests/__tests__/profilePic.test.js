// components/ProfilePic.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ProfilePic from '../../components/ProfilePic';
import '@testing-library/jest-dom'

describe('ProfilePic component', () => {
  it('renders an image', () => {
    const { getByAltText } = render(<ProfilePic />);
    expect(getByAltText('antonio ortega jr')).toBeInTheDocument();
  });
});