import React from 'react';
import { RenderResult } from '@testing-library/react';
import { axe as Axe } from 'vitest-axe';
import { toHaveNoViolations } from 'vitest-axe/dist/matchers';
import { renderWithAct } from './render';

const config = {
  rules: {
    region: {
      enabled: false,
    },

    'autocomplete-valid': {
      enabled: false,
    },
  },
};

export function axe(elements: React.ReactElement[]) {
  it('has no accessibility violations', async () => {
    for (const element of elements) {
      const renderResult: RenderResult | undefined = await renderWithAct(element);
      if (renderResult) {
        const result = await Axe(renderResult.container, config);
        result && expect(toHaveNoViolations(result));
      }
    }
  }, 30000);
}
