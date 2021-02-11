import React from 'react';
import { render } from '@testing-library/react';

import Maps from './maps';

describe('Maps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Maps />);
    expect(baseElement).toBeTruthy();
  });
});
