import React from 'react';
import { DEFAULT_THEME, MantineTheme } from '@mantine/core';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsStyle<Props>(options: Options<Props>, name = 'supports style') {
  it(`${name}: object`, () => {
    const { container } = render(
      <options.component {...options.props} style={{ color: 'salmon' }} />
    );

    expect(container.querySelector(options.selector || '*:not(style)')).toHaveStyle({
      color: 'rgb(250, 128, 114)',
    });
  });

  it(`${name}: theme function`, () => {
    const { container } = render(
      <options.component
        {...options.props}
        style={(theme: MantineTheme) => ({ color: theme.colors.pink[4] })}
      />
    );
    expect(container.querySelector(options.selector || '*:not(style)')).toHaveStyle({
      color: 'rgb(247, 131, 172)',
    });
  });

  it(`${name}: array of objects`, () => {
    const { container } = render(
      <options.component
        {...options.props}
        style={[{ color: 'salmon' }, { background: 'olive' }]}
      />
    );

    expect(container.querySelector(options.selector || '*:not(style)')).toHaveStyle({
      color: 'rgb(250, 128, 114)',
      background: 'olive',
    });
  });

  it(`${name}: array of theme functions`, () => {
    const { container } = render(
      <options.component
        {...options.props}
        style={[
          (theme: MantineTheme) => ({ color: theme.colors.pink[4] }),
          (theme: MantineTheme) => ({ background: theme.colors.orange[9] }),
        ]}
      />
    );

    expect(container.querySelector(options.selector || '*:not(style)')).toHaveStyle({
      color: DEFAULT_THEME.colors.pink[4],
      background: DEFAULT_THEME.colors.orange[9],
    });
  });
}
