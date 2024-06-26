import React from 'react';
import {
  Box,
  createVarsResolver,
  factory,
  LoadingOverlay,
  MantineTheme,
  rem,
  useProps,
  useStyles,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { assignRef } from '@mantine/hooks';
import { ComponentProvider } from './Component.context';
import classes from './Component.module.css';
import { ComponentProps, ComponentFactory } from './Component.types';

const defaultProps: Partial<ComponentProps> = {
  padding: 'md',
  loading: false,
};

const varsResolver = createVarsResolver<ComponentFactory>((_theme: MantineTheme, { padding }) => ({
  root: {
    '--component-padding': rem(padding),
  },
}));

export const Component = factory<ComponentFactory>((_props, ref) => {
  const props = useProps('Component', defaultProps, _props);
  const {
    padding,
    loading,
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<ComponentFactory>({
    name: 'Component',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  assignRef(ref, null);

  return (
    <ComponentProvider value={{ getStyles }}>
      <Box ref={ref} {...getStyles('root')} {...others} mod={[mod]} component="div">
        <LoadingOverlay visible={loading} unstyled={unstyled} />
        <div className={classes.inner}>{children}</div>
      </Box>
    </ComponentProvider>
  );
});

Component.classes = classes;
Component.displayName = 'mantine-extension-boilerplate/Component';
