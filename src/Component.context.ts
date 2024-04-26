import { createSafeContext } from '@mantine/utils';

export const [ComponentProvider, useComponent] = createSafeContext(
  'Component component was not found in tree'
);
