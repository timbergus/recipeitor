import React from 'react';
import { render } from '@testing-library/react';

import Home from './home';

describe('Home view', () => {
  test('should show "Hello World! message"', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('message').textContent).toBe('Hello World!');
  });
});
