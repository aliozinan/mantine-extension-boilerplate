import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

export function itSupportsProviderDefaultProps<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string,
  selector?: string
) {
  it('supports default props on MantineProvider', () => {
    const { container } = render(
      <MantineProvider
        theme={{
          components: {
            [name]: {
              defaultProps: { 'data-provider-prop': 'test-provider-prop' },
            },
          },
        }}
      >
        <Component {...requiredProps} padding={0} />
      </MantineProvider>
    );

    const target = selector ? container.querySelector(selector) : container.firstChild;
    expect(target).toHaveAttribute('data-provider-prop', 'test-provider-prop');
  });
}
