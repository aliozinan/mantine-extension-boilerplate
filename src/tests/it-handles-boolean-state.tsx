import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, expect, it } from 'vitest';

export function itHandlesBooleanState<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('correctly handles uncontrolled state', async () => {
    render(<Component {...requiredProps} checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    await userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('correctly handles controlled state', async () => {
    const spy = vi.fn();
    render(<Component {...requiredProps} checked={false} onChange={spy} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    await userEvent.click(screen.getByRole('checkbox'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
}
