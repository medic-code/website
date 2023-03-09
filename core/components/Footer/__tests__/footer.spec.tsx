/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Footer from '..';

describe('Footer', () => {
  it('Renders the Footer comp', () => {
    const { getByText } = render(<Footer />);

    const Text = getByText('Aaron Smith');

    expect(Text).toBeInTheDocument();
  });
});
