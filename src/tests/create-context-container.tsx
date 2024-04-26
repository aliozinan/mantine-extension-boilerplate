import React, { forwardRef } from 'react';

export function createContextContainer<T>(
  Component: React.FC<T>,
  Provider: React.FC<Record<string, unknown> | undefined>,
  providerProps?: Record<string, unknown>
) {
  const Container = forwardRef((props: T, ref) => (
    <Provider {...providerProps}>
      <Component {...props} ref={ref} />
    </Provider>
  ));

  Container.displayName = Component.displayName;
  return Container;
}
