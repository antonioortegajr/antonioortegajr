// components/ProfilePic.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProfilePic from '../../components/ProfilePic';

describe('ProfilePic component returns a sample image', () => {
    it('renders an image with the correct src and alt text', () => {
        const { getByAltText } = render(<ProfilePic img="https://picsum.photos/id/237/200/300" />);
        const image = getByAltText('antonio ortega jr');
        expect(image).toBeInTheDocument();
        expect(image.src).toContain('https://picsum.photos/id/237/200/300');
    });
});