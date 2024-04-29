import React, { FC } from 'react';
import { LoadingOverlay, Box, useComponentDefaultProps } from '@mantine/core';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { ComponentProvider } from './Component.context';
import { ComponentProps } from './Component.types';
import useStyles from './Component.styles';

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
    <ComponentProvider value={{ classNames, styles, unstyled }}>
      <Box {...others} data-loading={loading || undefined} className={cx(classes.root, className)}>
        {loading && <LoadingOverlay visible={loading} unstyled={unstyled} />}
        <div className={classes.inner}>{children}</div>
      </Box>
    </ComponentProvider>
  );
}

_Component.displayName = '@kodkisot/mantine-boilerplate-v6/Component';

export const Component: ForwardRefWithStaticComponents<ComponentProps, FC> = _Component;
