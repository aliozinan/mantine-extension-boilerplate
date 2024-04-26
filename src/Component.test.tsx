import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { itSupportsSystemProps } from './tests';
import { Component, ComponentProps } from './index';

const defaultProps: ComponentProps = {};

describe('@kodkisot/mantine-boilerplate-v6/Component', () => {
  itSupportsSystemProps({
    component: Component,
    props: defaultProps,
    displayName: '@kodkisot/mantine-boilerplate-v6/Component',
  });

  it('displays LoadingOverlay based on loading prop', () => {
    const { container: loading } = render(<Component {...defaultProps} loading />);
    const { container: notLoading } = render(<Component {...defaultProps} loading={false} />);

    expect(loading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(1);
    expect(notLoading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(0);
  });
});
