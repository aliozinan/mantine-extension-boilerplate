import { ReactNode } from 'react';
import { DefaultProps, MantineNumberSize, Selectors } from '@mantine/core';
import { ClassNames, Styles } from '@mantine/styles';
import useStyles from './Component.styles';

export type ComponentStylesNames = Selectors<typeof useStyles>;

export interface ComponentContext {
  classNames?: ClassNames<ComponentStylesNames>;
  styles?: Styles<ComponentStylesNames>;
  unstyled?: boolean;
}

export interface ComponentProps extends DefaultProps<ComponentStylesNames> {
  /** Padding from theme.spacing, or any valid CSS value to set padding */
  padding?: MantineNumberSize;

  /** Display loading overlay over Component */
  loading?: boolean;

  /** className */
  className?: string;

  children?: ReactNode;
}
