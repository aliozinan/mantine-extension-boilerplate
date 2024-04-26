/* eslint-disable no-console */
import React, { JSX } from 'react';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import { patchConsoleError } from './patch-console-error';

export function itThrowsContextError<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  errorMessage: string
) {
  it('throws error when rendered outside of context', async () => {
    patchConsoleError();
    expect(() => render(<Component {...requiredProps} />)).toThrow(new Error(errorMessage));
    patchConsoleError.release();
  });
}
