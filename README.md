# Benefits App

This app is a technical take-home assignment for the interview process.

## How to run this app locally?

### Development build

1. _(only for the first run)_ Make sure you have Node.js and npm installed. This app was developed using v20.14.0.
2. _(only for the first run)_ Run `npm install` to install all the packages required for this application.
3. The post install script should create a local DB JSON file in the `./src/server/db.json` file. If you don't have this file, run `npm run server:seed-db` or copy the `db.base.json` file and rename the copy to `db.json`.
4. To start the development server, run `npm run dev`.
5. Wait for the application to start.
6. The application should start on http://localhost:5173.

### Production build

1. Do steps 1..3 from the development build guide.
2. Build the application using `npm run build`.
3. Run the server using `npm run server:run`.
4. Run the application using `npm run preview`.
5. Wait for the application to start.
6. The application should start on http://localhost:4173.

## Future improvements

- Cover the code with unit/component tests.
- Implement a better data-fetching layer.
- Implement theming and token system for styled-components instead of using hard-coded values.
- The real application would have a better REST endpoints (e.g. `/employees/:id/dependents` instead of `/dependents?employeeId=:id`) as the current structure is just a limitation of `json-server`.
