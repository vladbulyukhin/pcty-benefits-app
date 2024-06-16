import { Table } from "../../../components/Table";
import type { Employee } from "../../../models/Employee";

type EmployeeTableRowProps = Readonly<{
  employee: Employee;
}>;

export const EmployeeTableRow: React.FC<EmployeeTableRowProps> = ({
  employee,
}) => {
  const detailsLink = `/employee/${employee.id}`;
  const label = `View details for ${employee.name}`;

  return (
    <Table.Row>
      <Table.LinkCell to={detailsLink} aria-label={label}>
        {employee.name}
      </Table.LinkCell>
      <Table.LinkCell to={detailsLink} aria-label={label}>
        {employee.position}
      </Table.LinkCell>
      <Table.LinkCell to={detailsLink} aria-label={label}>
        {employee.salaryPerPaycheck}
      </Table.LinkCell>
    </Table.Row>
  );
};

EmployeeTableRow.displayName = "EmployeeTableRow";
