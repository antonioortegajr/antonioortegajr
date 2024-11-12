import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from '../../components/Card';
import {
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

describe('Card component returns Title and Description', () => {
    // Test the Card component with a sample image
    it('renders a card with the correct title, description, and icon', () => {

        const testTitle = 'Test Card';
        
        const { getByText } = render(<Card title={testTitle} description="Card for testing" icon={faGithub} />);

        // the component adds an arrow to the end of the title
        const titleAddArrow = testTitle + ' →';
        const title = getByText(titleAddArrow);
        expect(title).toBeInTheDocument();

        const description = getByText('Card for testing');
        expect(description).toBeInTheDocument();

    });
});
