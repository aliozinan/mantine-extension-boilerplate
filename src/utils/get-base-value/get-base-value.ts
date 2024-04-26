import type { StyleProp } from '@mantine/core';

export function getBaseValue<Value = any>(value: StyleProp<Value>) {
  if (typeof value === 'object' && value !== null) {
    if ('base' in value) {
      return value.base;
    }

    return undefined;
  }

  return value;
}
