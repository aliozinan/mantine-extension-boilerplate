import React, { FC, ReactNode } from 'react';
import {
  DefaultProps,
  Selectors,
  MantineNumberSize,
  LoadingOverlay,
  Box,
  useComponentDefaultProps,
} from '@mantine/core';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
// import { ComponentProvider, useComponentContext } from './Component.context';
import useStyles from './Component.styles';

export type ComponentStylesNames = Selectors<typeof useStyles>;

export interface ComponentProps extends DefaultProps<ComponentStylesNames> {
  /** Padding from theme.spacing, or any valid CSS value to set padding */
  padding?: MantineNumberSize;

  /** Display loading overlay over Component */
  loading?: boolean;

  /** className */
  className?: string;

  children?: ReactNode;
}

export const defaultProps: Partial<ComponentProps> = {
  padding: 'md',
  loading: false,
  children: null,
};

export function _Component(props: ComponentProps) {
  const { padding, children, loading, className, classNames, styles, unstyled, ...others } =
    useComponentDefaultProps('Component', defaultProps, props);

  const { classes, cx } = useStyles(
    { padding: padding ?? 0 },
    { name: 'Component', classNames, styles, unstyled }
  );

  return (
    <Box {...others} data-loading={loading || undefined} className={cx(classes.root, className)}>
      {loading && <LoadingOverlay visible={loading} unstyled={unstyled} />}
      <div className={classes.inner}>{children}</div>
    </Box>
  );
}

_Component.displayName = '@kodkisot/mantine-boilerplate-v6/Component';

export const Component: ForwardRefWithStaticComponents<ComponentProps, FC> = _Component;
