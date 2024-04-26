import type { MantineBreakpoint, MantineTheme } from '@mantine/core';
import { px } from '../units-converters';

export function getBreakpointValue(breakpoint: number | string, theme: MantineTheme) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint as MantineBreakpoint]) as number;
  }

  return px(breakpoint) as number;
}
