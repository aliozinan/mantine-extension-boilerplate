import React from 'react';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

export function itSupportsWrapperProps<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports wrapperProps prop', () => {
    const { container } = render(
      <Component {...requiredProps} wrapperProps={{ 'data-test-prop': 'test-prop' }} />
    );
    expect(container.firstChild).toHaveAttribute('data-test-prop', 'test-prop');
  });
}
