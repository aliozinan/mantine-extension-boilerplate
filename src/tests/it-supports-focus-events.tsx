import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { vi, expect, it } from 'vitest';

export function itSupportsFocusEvents<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  selector?: string
) {
  it('supports focus events', () => {
    if (selector) {
      const onFocusSpy = vi.fn();
      const onBlurSpy = vi.fn();
      const { container } = render(
        <Component {...requiredProps} onFocus={onFocusSpy} onBlur={onBlurSpy} />
      );

      fireEvent.focus(container.querySelector(selector) as Element);
      expect(onFocusSpy).toHaveBeenCalled();

      fireEvent.blur(container.querySelector(selector) as Element);
      expect(onBlurSpy).toHaveBeenCalled();
    }
  });
}
