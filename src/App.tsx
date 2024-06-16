import type React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Root } from "./routes/Root";
import { EmployeesPage } from "./routes/Employees";
import { EmployeeDetailPage } from "./routes/EmployeeDetail";
import { normalizeStyles } from "./styles/normalize";
import { globalStyles } from "./styles/global";

const GlobalStyle = createGlobalStyle`
  ${normalizeStyles};
  ${globalStyles};
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <EmployeesPage />,
      },
      {
        path: "employee/:id",
        element: <EmployeeDetailPage />,
      },
    ],
  },
]);

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

App.displayName = "App";
