/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Header from '..';

describe('About', () => {
  it('Renders the About comp', () => {
    const { getByText } = render(<Header />);

    const Text = getByText('Aaron Smith');

    expect(Text).toBeInTheDocument();
  });
});
