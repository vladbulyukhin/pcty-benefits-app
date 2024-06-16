import type { Dependent } from "./Dependent";

const constantSalaryPerPaycheck = 2000;

export interface Employee {
  readonly id: string;
  readonly name: string;
  readonly position: string;
  readonly salaryPerPaycheck: number;
  readonly dependents: ReadonlyArray<Dependent>;
}

export const emptyEmployee: Employee = {
  id: "",
  name: "",
  position: "",
  salaryPerPaycheck: constantSalaryPerPaycheck,
  dependents: [],
};
