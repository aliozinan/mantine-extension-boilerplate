import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from './Component';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Component padding={2} />
  </React.StrictMode>
);
