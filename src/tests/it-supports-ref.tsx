import React from 'react';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

export function itSupportsRef<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  refType: unknown,
  refProp: string = 'ref'
) {
  it(refProp ? `supports getting ref with ${refProp} prop` : 'supports ref', () => {
    const ref = React.createRef<typeof refType>();
    render(<Component {...requiredProps} {...{ [refProp]: ref }} />);
    expect(ref.current).toBeInstanceOf(refType);
  });
}
