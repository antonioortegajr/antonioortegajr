import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import SocialLink from '../../components/SocialLink';
import {
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

describe('SocialLink component returns a link', () => {
  it('renders the correct link', () => {
    const { getByRole } = render(<SocialLink link="https://github.com/antonioortegajr" icon={faGithub} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'https://github.com/antonioortegajr');
  });

});
