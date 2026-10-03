# argent-bank — project guide

React/Redux banking frontend with login, logout, a user profile and profile editing. Account display data is committed locally.

## Scope and source

This guide describes the default branch `main` reviewed on 3 October 2026. Commands were checked against committed manifests and configuration; applications and external integrations were not executed as part of this documentation update.

## Repository map

- `src/App.js`
- `src/redux/store.js`
- `src/redux/authThunks.js`
- `src/redux/reducers/authSlice.js`
- `src/redux/reducers/userSlice.js`
- `src/data/Account.json`
- `swagger.yaml`

## Prerequisites and local use

Clone the repository and enter its root directory:

```sh
git clone https://github.com/sarabranco92/argent-bank.git
cd argent-bank
```

Install Node.js and npm compatible with the committed dependencies. A fresh install/build has not established an exact supported Node version for this repository. Keep the committed lockfile and do not mix npm and Yarn lockfile updates unintentionally.

```sh
npm install
npm start
```

The React development server normally opens http://localhost:3000. See the configuration notes below before trying integrations.

## Available npm scripts

From the repository root unless a directory is explicitly specified. These are existing commands, not evidence of a successful run.

| Command | Committed behavior |
| --- | --- |
| `npm start` | `react-scripts start` |
| `npm run build` | `react-scripts build` |
| `npm test` | `react-scripts test` |
| `npm run predeploy` | `npm run build` — publishes or prepares publishing; not a local check |
| `npm run deploy` | `gh-pages -d build` — publishes or prepares publishing; not a local check |

`eject` is intentionally omitted from setup: it permanently exposes the Create React App configuration and is unnecessary for normal use.

## Configuration and implementation notes

API URLs are hardcoded to `http://localhost:3001/api/v1/user` in `src/redux/authThunks.js`. The token is kept in sessionStorage. A root .env does not automatically override these hardcoded URLs. Verify backend support for `userName` updates. The Swagger file describes API design; it does not supply a running backend or real transaction processing. A test script exists, but no dedicated source test files were found.

## Verification checklist

Start the separate backend on port 3001, sign in with a local demo user, inspect profile loading, edit the user name and sign out. Test a rejected login and access without a session.

No dedicated automated test/spec files were found in the reviewed application tree. Where a test script exists, its presence alone does not establish test coverage.

## Maintenance

Keep this guide in sync when routes, commands, environment variables or hosting paths change. Use development databases/accounts for integration checks. Keep private credentials in server-side environment configuration and out of documentation. No new license or ownership terms are introduced by this guide; retain existing repository notices.
