# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Install a build tool
https://react.dev/learn/build-a-react-app-from-scratch

Step 1: Install a build tool
```
npm create vite@latest my-app -- --template react
```

we will create a practice React app named recreate-github.
Run this command to create this practice project.
```
npm create -y vite@latest recreate-github -- --template react
```

It's also a good idea to add the semicolon eslint rule to the .eslintrc.cjs file. The resulting rules section should look like this:
```
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': [ 'warn', 'always'],
  },

```
In our project root, we'll install our dependencies and then start a server with the following two commands in the terminal:
```
$ npm install
```
After running npm install, we'll see a new directory at the root level called node_modules with the installed dependencies. Now we're ready to start the server by running the following command in the terminal:
```
$ npm run dev
```