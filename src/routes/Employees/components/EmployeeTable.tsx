import { Table } from "../../../components/Table";
import type { Employee } from "../../../models/Employee";
import { EmployeeTableRow } from "./EmployeeTableRow";

type EmployeeTableProps = Readonly<{
  employees: ReadonlyArray<Employee>;
}>;

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Header>Name</Table.Header>
        <Table.Header>Position</Table.Header>
        <Table.Header>Salary (per paycheck)</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {employees.map((employee: Employee) => (
        <EmployeeTableRow key={employee.id} employee={employee} />
      ))}
    </Table.Body>
  </Table>
);

EmployeeTable.displayName = "EmployeeTable";
