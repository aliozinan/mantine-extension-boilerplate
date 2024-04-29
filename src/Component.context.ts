import { createSafeContext } from '@mantine/utils';
import { ComponentContext } from './Component.types';

export const [ComponentProvider, useComponent] = createSafeContext<ComponentContext>(
  'Component component was not found in tree'
);
