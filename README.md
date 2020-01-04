<h1 align="center">Start your next react typescript library in seconds</h1>

### Features

- **Latest versions**
- **Typescript**
- **Eslint with Typescript**
- **Jest setup with react-testing-library and mocks**
- **Styled with Prettier**

## ❯ Table of Contents

- [Getting Started](#-getting-started)
- [Scripts and Tasks](#-scripts-and-tasks)
- [Related Projects](#-related-projects)
- [License](#-license)

---

## ❯ Getting Started

### Step 1: Set up the Development Environment

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

### Step 2: Create new Project

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.example` file and rename it to `.env`. In this file you have to add your database connection information.

Create a new database with the name you have in your `.env`-file.

Then setup your application environment.

```bash
npm install
```

> This installs all dependencies.

---

## ❯ Scripts and Tasks

### Install

- Install all dependencies with `npm install`

### Linting

- Run code quality analysis using `npm run lint`.
- Fix lint issues with `npm run lint:fix`.

### Tests

- Run the unit tests using `npm run test`.
- Run the unit tests in watch mode using `npm run test:watch`.
- Generate coverage using `npm run test:cov`.

### Building the project

- Run `npm run build` to build artefacts and put them in their corresponding folders.
- The built artefacts include common-js, esm, es2015 and umd builds.

---

## ❯ Related Projects

- [react-app-typescript-starter](https://github.com/nitishkr88/react-app-typescript-starter)
- [express-typescript-starter](https://github.com/nitishkr88/express-typescript-starter)

---

## ❯ License

[MIT](/LICENSE)
