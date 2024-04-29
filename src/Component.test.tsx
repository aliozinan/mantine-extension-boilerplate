import React from 'react';
import { render, tests } from './tests';
import { Component } from './Component';
import { ComponentProps, ComponentStylesNames } from './Component.types';

const defaultProps: ComponentProps = {
  padding: 'md',
  loading: false,
};

describe('mantine-extension-boilerplate/Component', () => {
  tests.itSupportsSystemProps<ComponentProps, ComponentStylesNames>({
    component: Component,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: 'mantine-extension-boilerplate/Component',
    stylesApiSelectors: ['root'],
  });

  it('displays LoadingOverlay based on loading prop', () => {
    const { container: loading } = render(<Component {...defaultProps} loading />);
    const { container: notLoading } = render(<Component {...defaultProps} loading={false} />);

    expect(loading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(1);
    expect(notLoading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(0);
  });
});
