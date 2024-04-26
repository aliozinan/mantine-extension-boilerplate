import { createSafeContext } from '@mantine/core';

export const [ComponentProvider, useComponentContext] = createSafeContext(
  'Component was not found in tree'
);
