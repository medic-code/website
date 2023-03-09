/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import About from '..';

describe('About', () => {
  it('Renders the About comp', () => {
    const { getByText } = render(<About />);

    const Text = getByText('About Me');

    expect(Text).toBeInTheDocument();
  });
});
