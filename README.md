# Mantine Extension Boilerplate (v6)

[![License](https://img.shields.io/badge/License-MIT-green)](https://github.com/aliozinan/mantine-extension-boilerplate/blob/main/LICENSE)
[![Node Version](https://img.shields.io/badge/Node-v18.20.2-blue?logo=nodedotjs)](https://github.com/nodejs/node)
[![Yarn Version](https://img.shields.io/badge/Yarn-v1.22.22-blue?logo=yarn)](https://github.com/yarnpkg/yarn)
[![Typescript Version](https://img.shields.io/badge/TS-v5.4.5-blue?logo=typescript)](https://github.com/microsoft/TypeScript)

[![Mantine Version](https://img.shields.io/badge/Mantine-v6.0.21-blue?logo=mantine)](https://github.com/mantinedev/mantine/tree/v6)

[![Vite Version](https://img.shields.io/badge/Vite-v5.2.10-blue?logo=vite)](https://github.com/vitejs/vite)
[![Vitest Version](https://img.shields.io/badge/Vitest-v1.5.0-blue?logo=vitest)](https://github.com/vitest-dev/vitest)
[![React Testing Library Version](https://img.shields.io/badge/React_Testing_Library-v15.0.4-blue?logo=testing-library)](https://github.com/testing-library/react-testing-library)
[![Prettier Version](https://img.shields.io/badge/Prettier-v3.2.5-blue?logo=prettier)](https://github.com/prettier/prettier)
[![Eslint Version](https://img.shields.io/badge/Eslint-v9.1.1-blue?logo=eslint)](https://github.com/eslint/eslint)
[![Stylelint Version](https://img.shields.io/badge/StyleLint-v16.4.0-blue?logo=stylelint)](https://github.com/stylelint/stylelint)
[![Stoybook Version](https://img.shields.io/badge/Storybook-v8.0.9-blue?logo=storybook)](https://github.com/storybookjs/storybook)

A boilerplate to help you code your own modules using [Mantine](https://github.com/mantinedev/mantine) components and use in your projects.

### Installation

Simply run `yarn install` in the project folder

### Usage

* No need to change any files under `src/tests` folder
* Rename the `src/Component.*` files and constant names and build your own [Mantine (v6)](https://github.com/mantinedev/mantine/tree/v6) module.
* Don't forget to reflect your constant name changes to `src/index.ts` and `src/main.tsx` files.
* The files under the `src/tests` folder together with the `@mantine/core`, `@mantine/hooks`, `@mantine/styles` and `@mantine/utils` packages provides the framework you need.
* You can either use the [Mantine (v6)](https://github.com/mantinedev/mantine/tree/v6) components or create your own custom component structure using the Mantine framework.

### Commands

- `yarn start` : Allows you to test your component on your browser
- `yarn build` : Builds the component package files under the `dist` folder
- `yarn build:types` : Compiles the types into `dist/index.d.ts` file
- `yarn clean` : Removes the `dist` folder
- `yarn clean:all` : Removes the `dist` and `storybook-static` folders
- `yarn test` : Run the tests of your component using Vitest, which you need to write inside `Component.test.tsx`
- `yarn typecheck` : Runs type checking to find out any typing bugs
- `yarn lint:scripts` : Linting check on the ts(x) files using Eslint
- `yarn lint:styles` : Linting check on the (s)css files using Stylelint
- `yarn format:scripts` : Formatting fix on the ts(x) files using Prettier & Eslint
- `yarn format:scripts` : Formatting fix on the (s)css files using Stylelint
- `storybook:dev` : Runs the storybook on your development environment
- `storybook:build` : Builds the storybook on your development environment

### Thanks

Many thanks to [Vitaly Rtishchev](https://github.com/mantinedev/mantine) for the inspiration and such a dev friendly UI Kit
