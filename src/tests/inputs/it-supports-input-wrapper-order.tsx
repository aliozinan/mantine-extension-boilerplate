import React from 'react';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

export function itSupportsInputWrapperOrder<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string
) {
  it('supports inputWrapperOrder prop', () => {
    const { container } = render(
      <Component
        {...requiredProps}
        id="invalid-test-id"
        error="test-error"
        description="test-description"
        label="test-label"
        inputWrapperOrder={['description', 'error', 'input', 'label']}
      />
    );
    const children = container.firstChild && container.firstChild.childNodes;
    children &&
      children.length &&
      expect(children[0]).toBe(container.querySelector(`.mantine-${name}-description`));
    children &&
      children.length &&
      expect(children[1]).toBe(container.querySelector(`.mantine-${name}-error`));
    children &&
      children.length &&
      expect(children[children.length - 1]).toBe(container.querySelector(`.mantine-${name}-label`));
  });
}
