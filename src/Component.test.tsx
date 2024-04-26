import React from 'react';
import { render, tests } from './tests';
import { Component, ComponentProps, ComponentStylesNames } from './Component';

const defaultProps: ComponentProps = {
  padding: 'md',
  loading: false,
};

describe('@kodkisot/mantine-extension-boilerplate-v7/Component', () => {
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
    displayName: '@kodkisot/mantine-extension-boilerplate-v7/Component',
    stylesApiSelectors: ['root'],
  });

  it('displays LoadingOverlay based on loading prop', () => {
    const { container: loading } = render(<Component {...defaultProps} loading />);
    const { container: notLoading } = render(<Component {...defaultProps} loading={false} />);

    expect(loading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(1);
    expect(notLoading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(0);
  });
});
