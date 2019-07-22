# README

> A Vue.js Project to consume itunes search api using vue components.

## Prerequisites

- Node v8.3.0 +
- NPM v5.6.0 +

### Technologies

The client side application is comprised of the following technologies:

#### For generating Static Markup

- [Vue.js](https://vuejs.org)
  Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

#### HTML, CSS and JavaScript

- STYLUS - Stylus is a dynamic stylesheet preprocessor language that is compiled into Cascading Style Sheets (CSS). Its design is influenced by Sass and LESS. It's regarded as the fourth most used CSS preprocessor syntax.

#### Build Tools, Transpiler & Package Manager

- [Babel](https://babeljs.io/)
- [NPM](https://www.npmjs.com/)


### Getting Started - Code & Environment - Setup

- Go to the root folder (where package.json is available) and run the following command:s

```bash
$ npm install
```

- run below command to start the server:

For Mac/Windows

```bash
$ npm run serve
```

# Build for production with minification

```bash
$ npm run build
```
# Lint Checks

```bash
npm run lint
```

# End point changes

- currently the endpoint (under ./src/views/Search/Search.js) is referring to heroku hosted app. It needs to be updated to localhost:port if the express server is run locally.
