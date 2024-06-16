import { useEffect, useState } from "react";
import { getEmployees } from "../../api/employeeApi";
import { LinkButton } from "../../components/Button";
import { Card } from "../../components/Card";
import { Inline, Stack } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { Page } from "../../components/Page";
import { Caption } from "../../components/Text";
import { useAsyncHandler } from "../../hooks/useAsyncHandler";
import { Employee } from "../../models/Employee";
import { EmployeeTable } from "./components/EmployeeTable";
import { EmployeeTableEmptyState } from "./components/EmployeeTableEmptyState";
import { EmployeeTableErrorState } from "./components/EmployeeTableErrorState";

export const EmployeesPage: React.FC = () => {
  const [employees, setEmployees] = useState<ReadonlyArray<Employee>>([]);

  const {
    execute: fetchEmployees,
    isLoading,
    hasFailed,
  } = useAsyncHandler(getEmployees, setEmployees);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <Page>
      <Page.Header>Employees & Benefits</Page.Header>

      <Page.Content>
        <Card>
          <Card.Header>
            <Inline>
              <Stack>
                <Card.Title>Employees</Card.Title>
                <Card.Description>
                  Manage your employees and their benefits
                </Card.Description>
              </Stack>

              <LinkButton to="/employee/new">Add Employee</LinkButton>
            </Inline>
          </Card.Header>

          <Card.Body>
            {isLoading ? (
              <Loading />
            ) : hasFailed ? (
              <EmployeeTableErrorState />
            ) : employees.length === 0 ? (
              <EmployeeTableEmptyState />
            ) : (
              <EmployeeTable employees={employees} />
            )}
          </Card.Body>

          <Card.Footer>
            <Caption>
              Showing <strong>{employees.length}</strong> employees
            </Caption>
          </Card.Footer>
        </Card>
      </Page.Content>
    </Page>
  );
};

EmployeesPage.displayName = "EmployeesPage";
