import { createSafeContext } from '@mantine/core';
import { ComponentContext } from './Component.types';

export const [ComponentProvider, useComponentContext] = createSafeContext<ComponentContext>(
  'Component was not found in tree'
);
