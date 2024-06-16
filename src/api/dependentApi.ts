import type { Dependent } from "../models/Dependent";
import { fetchApi } from "./baseApi";

export const getEmployeeDependents = (
  employeeId: string
): Promise<ReadonlyArray<Dependent>> => {
  return fetchApi(`/dependents?employeeId=${employeeId}`);
};

export const createDependent = (
  dependent: Omit<Dependent, "id">
): Promise<Dependent> => {
  return fetchApi("/dependents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dependent),
  });
};

export const updateDependent = (dependent: Dependent): Promise<Dependent> => {
  return fetchApi(`/dependents/${dependent.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dependent),
  });
};

export const deleteDependent = (dependentId: string): Promise<Dependent> => {
  return fetchApi(`/dependents/${dependentId}`, {
    method: "DELETE",
  });
};
