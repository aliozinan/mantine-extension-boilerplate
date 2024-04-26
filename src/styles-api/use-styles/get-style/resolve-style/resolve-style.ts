import { CSSProperties } from 'react';
import { MantineStyleProp, MantineTheme } from '@mantine/core';

interface ResolveStyleInput {
  style: MantineStyleProp | undefined;
  theme: MantineTheme;
}

export function resolveStyle({ style, theme }: ResolveStyleInput): CSSProperties {
  if (Array.isArray(style)) {
    return [...style].reduce<Record<string, any>>(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {}
    );
  }

  if (typeof style === 'function') {
    return style(theme);
  }

  if (style == null) {
    return {};
  }

  return style;
}
