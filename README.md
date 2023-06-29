# Pluck.eco Web Frontend

## Setting up the environment

You will need the supabase variables to connect to supabase. Add them to a .env file like this:
`touch .env`
`echo 'PUBLIC_SUPABASE_URL=https://<supabase-url>.supabase.co' >> .env`
`echo 'PUBLIC_SUPABASE_KEY=the_key_xxx' >> .env`
`echo 'PUBLIC_REDIRECT_URL=http://localhost:3000/magic-link' >> .env`

## Authentication

Authentication is handled by supabase. Using <https://github.com/magnuswahlstrand/astro-supabase-vercel> as an example, we are able to check the user's login status, or query the database on the server.
This simplifies the frontend (by requiring less javascript to update the page), and speeds up page load for pages that do not need that data.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│   |   └── index.astro
|   └── layouts
|       └── Layout.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                                 |
| :------------------------- | :----------------------------------------------------- |
| `yarn install`             | Installs dependencies                                  |
| `yarn run dev`             | Starts local dev server at `localhost:3000`            |
| `yarn run build`           | Build your production site to `./dist/`                |
| `yarn run preview`         | Preview your build locally, before deploying           |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check`       |
| `yarn run astro -- --help` | Get help using the Astro CLI                           |
| `yarn run test`            | Run all tests                                          |
| `yarn run test:ui`         | Run all tests in UI mode                               |
| `yarn run test:e2e`        | Run all end-to-end tests                               |
| `yarn run test:b`          | Run all backend tests                                  |
| `yarn run test:b:unit`     | Run all backend unit tests                             |
| `yarn run test:b:intg`     | Run all backend integration tests                      |
| `yarn run test:f`          | Run all frontend tests                                 |
| `yarn run test:f:unit`     | Run all frontend unit tests                            |
| `yarn run test:f:intg`     | Run all frontend integration tests                     |
| `yarn run lint`            | Runs ESLint to perform linting on .js and .ts files    |
| `yarn run lint:style`      | Executes Stylelint to perform linting on all CSS files |
| `yarn run lint:markup`     | Executes HTMLHint to perform linting on all HTML files |

## 🧪 Testing

For testing we will be using the recommended testing frameworks & libraries suggested by [Astro](https://docs.astro.build/en/guides/testing/#playwright).

Structure of the tests directory:

```
/
├── tests
│   ├── frontend
│   │   ├── unit
│   │   └── integration
│   ├── backend
│   │   ├── unit
│   │   └── integration
│   └── e2e
```

### 🎭 Playwright

This project uses [Playwright](https://playwright.dev/docs/intro) for all testing. Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API. It enables cross-browser web automation that is ever-green, capable, reliable and fast.

#### Installation

You can get started and run your tests using the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

Alternatively, you can install Playwright within your Astro project using the package manager of your choice. Follow the CLI steps to choose JavaScript/TypeScript, name your test folder, and add an optional GitHub Actions workflow.

```
yarn create playwright
```

Since we are using Playwright for all testing, we need to further install Playwright Test for [components](https://playwright.dev/docs/test-components) for our respective framework (React, Vue, Svelte, etc.). For example, if you are using React, you would run:

```
npm init playwright@latest -- --ct
```

In the playwright config file, you can set the directory where your tests are located. By default, Playwright will look for tests in the `tests` directory.

#### Create your first Playwright test

Create add a new test file into one of the test folders. Remember to name your test file with the `.spec.ts` extension. For example, `tests/frontend/unit/<name>.spec.ts`.

#### Run your tests

You can run a single test or several tests at once, testing one or multiple browsers. By default, your test results will be shown in the terminal. Optionally, you can open the HTML Test Reporter to show a full report and filter test results. Refer to the commands section
for more details. For more information on running tests, see [Running Tests](https://playwright.dev/docs/running-tests).

## 👠 Styling

This project utilizes a combination of tools and extensions for styling and maintaining consistent code formatting. The following sections outline the setup and configuration for each tool.

### Prettier

[Prettier](https://prettier.io/docs/en/index.html) is an opinionated code formatter that enforces a consistent code style across your entire codebase. It is configured to work with ESLint to ensure that all code is formatted correctly.

The Prettier configurations are defined in the .prettierrc files at the project root.

To exclude certain lines from being restyled by Prettier, you can add a comment with prettier-ignore at the end of those lines. For example:

```
// prettier-ignore
const ignoredLine = "This line will not be reformatted";
```

View the [Prettier documentation](https://prettier.io/docs/en/ignore.html) for more information on ignoring code.

### ESLint

[ESLint](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/?utm_source=coda&utm_medium=iframely) is a linter that helps identify and enforce coding standards, detect potential errors, and improve code quality.

To run ESLint for JavaScript and TypeScript files, use the following command:

```
yarn lint
```

The ESLint configurations are defined in the .eslintrc. file at the project root.

### StyleLint

[Stylelint](https://stylelint.io/user-guide/get-started/) is a linter specifically designed for CSS and CSS-like syntaxes. It helps identify and enforce consistent coding conventions and catches potential errors in stylesheets.

To run Stylelint and check for linting issues in CSS files, use the following command:

```
yarn lint:style
```

The Stylelint configuration is defined in the .stylelintrc file at the project root.

### HTMLHint

[HTMLHint](https://htmlhint.com/) is a Static Code Analysis Tool for HTML. It helps identify and enforce consistent coding conventions and catches potential errors in HTML files.

To run HTMLHint and check for linting issues in HTML files, use the following command:

```
yarn lint:markup
```

The HTMLHint configuration is defined in the .htmlhintrc file at the project root.

### Astro

This project uses the Astro extension for Visual Studio Code, which provides the following features:

- Syntax highlighting for .astro files.
- TypeScript type information for .astro files.
- [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) for code completion, hints, and more.

Make sure to install the [Astro](https://docs.astro.build/en/editor-setup/#vs-code) extension in your Visual Studio Code editor for an enhanced development experience.

## 🧩 Recommended VS Code Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)
- [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Code GPT](https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt)

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
