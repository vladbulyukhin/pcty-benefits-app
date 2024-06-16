import type { Employee } from "../models/Employee";
import { fetchApi } from "./baseApi";

export const getEmployees = (): Promise<ReadonlyArray<Employee>> => {
  return fetchApi("/employees");
};

export const getEmployee = (employeeId: string): Promise<Employee> => {
  return fetchApi(`/employees/${employeeId}`);
};

export const createEmployee = (
  employee: Omit<Employee, "id">
): Promise<Employee> => {
  return fetchApi("/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
};

export const updateEmployee = (employee: Employee): Promise<Employee> => {
  return fetchApi(`/employees/${employee.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
};

export const deleteEmployee = (employeeId: string): Promise<Employee> => {
  return fetchApi(`/employees/${employeeId}`, {
    method: "DELETE",
  });
};
