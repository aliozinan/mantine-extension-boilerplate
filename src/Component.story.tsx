import React from 'react';
import { Component } from './Component';

export default { title: 'Component' };

export function Usage() {
  return <Component>Hello World!</Component>;
}

export function Unstyled() {
  return <Component unstyled>Unstyled!</Component>;
}
