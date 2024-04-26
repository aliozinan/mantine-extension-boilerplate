import React from 'react';
import { render, act, RenderResult } from '@testing-library/react';

export async function renderWithAct(element: React.ReactElement) {
  let result: RenderResult | undefined;
  await act(async () => {
    result = render(element) as RenderResult;
  });
  return result;
}
