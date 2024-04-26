import React from 'react';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

export function itSupportsInputIcon<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports input icon', () => {
    const { getByText } = render(<Component {...requiredProps} icon="Test icon" />);
    expect(getByText('Test icon')).toBeInTheDocument();
  });
}
