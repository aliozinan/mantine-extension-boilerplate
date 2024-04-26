import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  LoadingOverlay,
  MantineSize,
  MantineTheme,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { assignRef } from '@mantine/hooks';
import { ComponentProvider } from './Component.context';
import classes from './Component.module.css';

export type ComponentStylesNames = 'root';
export type ComponentCssVariables = {
  root: '--component-padding';
};

export interface ComponentProps
  extends BoxProps,
    StylesApiProps<ComponentFactory>,
    ElementProps<'div'> {
  /** Padding from theme.spacing, or any valid CSS value to set padding */
  padding?: MantineSize;

  /** Determines whether a loading overlay should be displayed over the component, `false` by default */
  loading?: boolean;

  children?: React.ReactNode;
}

export type ComponentFactory = Factory<{
  props: ComponentProps;
  ref: HTMLDivElement;
  stylesNames: ComponentStylesNames;
  vars: ComponentCssVariables;
}>;

const defaultProps: Partial<ComponentProps> = {
  padding: 'md',
  loading: false,
};

const varsResolver = createVarsResolver<ComponentFactory>((_theme: MantineTheme, { padding }) => ({
  root: {
    '--component-padding': padding,
  },
}));

export const Component = factory<ComponentFactory>((_props, ref) => {
  const props = useProps('Component', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    loading,
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
    <ComponentProvider value={{}}>
      <Box ref={ref} {...getStyles('root')} {...others} mod={[mod]} component="div">
        <LoadingOverlay visible={loading} unstyled={unstyled} />
        {children}
      </Box>
    </ComponentProvider>
  );
});

Component.classes = classes;
Component.displayName = '@kodkisot/mantine-extension-boilerplate-v7/Component';
