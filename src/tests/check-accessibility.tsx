import React from 'react';
import { expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { toHaveNoViolations } from 'vitest-axe/dist/matchers';
import { RenderResult } from '@testing-library/react';
import { renderWithAct } from './render-with-act';

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

export function checkAccessibility(elements: React.ReactElement[]) {
  it('has no accessibility violations', async () => {
    for (const element of elements) {
      const renderResult: RenderResult | undefined = await renderWithAct(element);
      if (renderResult) {
        const result = await axe(renderResult.container, config);
        result && expect(toHaveNoViolations(result));
      }
    }
  }, 30000);
}
