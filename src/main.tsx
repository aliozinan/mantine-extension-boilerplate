import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Component } from './Component';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <Component padding="md" loading={false}>
        Hello world!
      </Component>
    </MantineProvider>
  </React.StrictMode>
);
