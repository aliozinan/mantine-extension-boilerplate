import { BoxProps, ElementProps, Factory, GetStylesApi, StylesApiProps } from '@mantine/core';
import React from 'react';

type MantineNumberSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number;

export interface ComponentContext {
  padding?: MantineNumberSize;
  loading?: boolean;
  unstyled?: boolean;
  getStyles: GetStylesApi<ComponentFactory>;
}

export type ComponentStylesNames = 'root';
export type ComponentCssVariables = {
  root: '--component-padding';
};

export interface ComponentProps
  extends BoxProps,
    StylesApiProps<ComponentFactory>,
    ElementProps<'div'> {
  /** Padding from theme.spacing, or any valid CSS value to set padding */
  padding?: MantineNumberSize;

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
