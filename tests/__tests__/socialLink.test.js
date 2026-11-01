import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import SocialLink from '../../components/SocialLink';
import {
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

jest.mock('react-qrcode-logo', () => ({
  QRCode: () => <div data-testid="qr-code" />,
}));

describe('SocialLink component returns a link', () => {
  it('renders the correct link', () => {
    const { getByRole } = render(<SocialLink link="https://github.com/antonioortegajr" icon={faGithub} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'https://github.com/antonioortegajr');
  });

  it('renders the passed label as the accessible name', () => {
    const { getByRole } = render(<SocialLink link="https://github.com/antonioortegajr" icon={faGithub} label="GitHub" />);
    const link = getByRole('link', { name: 'GitHub' });
    expect(link).toHaveAttribute('aria-label', 'GitHub');
  });

  it('renders a list item as its root element', () => {
    const { container } = render(<SocialLink link="https://github.com/antonioortegajr" icon={faGithub} label="GitHub" />);
    expect(container.firstChild.tagName).toBe('LI');
  });

});

const firePointerEvent = (element, type, pointerType) => {
  const event = new Event(type, { bubbles: true });
  Object.defineProperty(event, 'pointerType', { value: pointerType });
  fireEvent(element, event);
};

describe('SocialLink QR code visibility', () => {
  it('shows the QR code on mouse pointer-enter and hides it on pointer-leave', async () => {
    const { getByRole, container } = render(<SocialLink link="https://github.com/antonioortegajr" icon={faGithub} label="GitHub" />);
    const link = getByRole('link');

    firePointerEvent(link, 'pointerover', 'mouse');

    await waitFor(() => {
      expect(container.querySelector('.qr-code')).toBeInTheDocument();
    });

    firePointerEvent(link, 'pointerout', 'mouse');

    await waitFor(() => {
      expect(container.querySelector('.qr-code')).not.toBeInTheDocument();
    });
  });

  it('does not show the QR code on touch pointer-enter', async () => {
    const { getByRole, container } = render(<SocialLink link="https://github.com/antonioortegajr" icon={faGithub} label="GitHub" />);
    const link = getByRole('link');

    firePointerEvent(link, 'pointerover', 'touch');

    expect(container.querySelector('.qr-code')).not.toBeInTheDocument();
  });
});
