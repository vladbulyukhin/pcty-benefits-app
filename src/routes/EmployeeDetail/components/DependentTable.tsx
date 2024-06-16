import React from "react";
import { Table } from "../../../components/Table";
import { DependentRow } from "./DependentRow";
import { AddDependentRow } from "./AddDependentRow";
import type { Dependent } from "../../../models/Dependent";

type DependentTableProps = Readonly<{
  dependents: ReadonlyArray<Dependent>;
  isLoading: boolean;
  onAdd: (name: string) => void;
  onUpdate: (dependent: Dependent) => void;
  onDelete: (id: string) => void;
  showAddDependent: boolean;
}>;

export const DependentTable: React.FC<DependentTableProps> = ({
  dependents,
  isLoading,
  onAdd,
  onUpdate,
  onDelete,
  showAddDependent,
}) => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Header>Name</Table.Header>
        <Table.Header />
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {dependents.map((dependent) => (
        <DependentRow
          key={dependent.id}
          dependent={dependent}
          onUpdate={onUpdate}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      ))}
      {showAddDependent && (
        <AddDependentRow onAdd={onAdd} isLoading={isLoading} />
      )}
    </Table.Body>
  </Table>
);

DependentTable.displayName = "DependentTable";
