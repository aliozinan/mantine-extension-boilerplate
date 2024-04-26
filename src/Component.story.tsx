/* eslint-disable no-console */
import React from 'react';
import { Component } from './index';

export default { title: 'Component' };

export function Usage() {
  return (
    <div>
      <Component padding={8}>Hello world!</Component>
    </div>
  );
}
