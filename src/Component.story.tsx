import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Component } from './Component';

export default { title: 'Component' };

export function Usage() {
  return (
    <MantineProvider>
      <Component>Hello World!</Component>
    </MantineProvider>
  );
}
