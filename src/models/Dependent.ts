export interface Dependent {
  readonly id: string;
  readonly name: string;
  readonly employeeId: string;
}

export const emptyDependent: Dependent = {
  id: "",
  name: "",
  employeeId: "",
};
