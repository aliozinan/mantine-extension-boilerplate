import React, { forwardRef } from 'react';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

export function itIsPolymorphic<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  selector?: string
) {
  it('is polymorphic', () => {
    const getTarget = (container: HTMLElement): HTMLElement =>
      selector
        ? (container.querySelector(selector) as HTMLElement)
        : (container.firstChild as HTMLElement);
    const TestComponent = forwardRef(
      (props: Record<string, unknown>, ref: React.ForwardedRef<HTMLElement | null>) => (
        <mark data-test-prop="is-polymorphic" ref={ref} {...props} />
      )
    );
    const { container: withTag } = render(
      <Component component="a" href="https://mantine.dev" {...requiredProps} />
    );
    const { container: withComponent } = render(
      <Component component={TestComponent} {...requiredProps} />
    );

    expect(getTarget(withTag).tagName).toBe('A');
    expect(getTarget(withComponent).tagName).toBe('MARK');
  });
}
