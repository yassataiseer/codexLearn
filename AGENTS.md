# Repository Guidelines

## Project Structure & Module Organization

This is a small Next.js App Router project. Application code lives in `app/`.
The root layout is `app/layout.js`, and the main counter UI is `app/page.js`.
Project configuration is kept at the repository root, including `package.json`,
`package-lock.json`, `next.config.mjs`, and `jsconfig.json`.

There is currently no dedicated `tests/` directory and no static asset directory.
If assets are added, prefer the conventional `public/` directory for files served
directly by Next.js.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build and catch framework-level errors.
- `npm run start`: run the production build locally after `npm run build`.
- `npm run lint`: run the configured Next.js lint command.

Run commands from the repository root.

## Coding Style & Naming Conventions

Use JavaScript and React function components. Components and exported page/layout
functions should use PascalCase names, such as `HomePage` and `RootLayout`.
Use camelCase for variables, state values, and event handlers.

Follow the existing style: 2-space indentation, single quotes, semicolons, and
clear JSX formatting. Keep client-only interactivity in files marked with
`'use client';`. Avoid broad refactors when changing the simple counter flow.

## Testing Guidelines

No test framework is currently configured. For now, verify changes with
`npm run lint` and `npm run build`. When adding tests, prefer colocated tests
near the related component or a top-level `tests/` directory, and use descriptive
names such as `page.test.js` or `counter.test.js`.

For UI changes, manually confirm the app still renders, the Increase and
Decrease buttons update the count, and refreshing resets the counter to `0`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries, for example
`Add counter decrement control and gitignore` and `Scaffold Next.js counter app`.
Keep commit messages focused on the behavior or project change.

Pull requests should include a concise description, the commands run for
verification, and screenshots or screen recordings for visible UI changes. Link
related issues when available and call out any follow-up work explicitly.

## Agent-Specific Instructions

Keep generated changes scoped to this small Next.js app. Do not introduce new
frameworks, test runners, or styling systems without a clear project need.
