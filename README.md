# Design System

This project is based on material ui template: https://www.minimals.cc/

Before using please make sure that you are complying to the license terms:
https://material-ui.com/store/license/

## General Guidelines

- Before starting to develop a new component, please check if the component exists inside the minimal template theme, if it does, import it to the desgin system and convert it to typescript along the way.
- When creating a new component, try to build it using
  containment & specialization, this will allow more flexibility in the feature.
  https://reactjs.org/docs/composition-vs-inheritance.html
- Refrain from using opinionated dependencies in your components that may affect the consuming projects. i.e state management/translation libraries
- Make sure your that Husky hook is working on each commit, that will prevent you from triggering the pipeline with lint/prettier errors or just tests failures and save you time.

## Technical Debts

- Fix and remove files from .eslintignore.
- Convert all remaining JS files to TypeScript.
- Migrate to material ui latest stable version.
- Upgrade node version

## Requirements

```
node - 16.17.1
npm - 8.15.3
```

If your project uses a different version of node / npm you can you use nvm to toggle between the two.

## How to install

`npm install`

## How to start Storybook

`npm start`

## How to run ESLint

`npm run eslint`

`npm run eslint:fix`

## How to run Prettier

`npm run prettier`

`npm run prettier:fix`

## How to configure your project

In order for theme styling to be applied, your app should be wrapped with:

```HTML
<ThemeConfig isLightMode>

</ThemeConfig>
```
