import React, { useState } from "react";
import { Table } from "../../../components/Table";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

type AddDependentRowProps = Readonly<{
  onAdd: (name: string) => void;
  isLoading: boolean;
}>;

export const AddDependentRow: React.FC<AddDependentRowProps> = ({
  onAdd,
  isLoading,
}) => {
  const [newDependentName, setNewDependentName] = useState("");

  const handleAdd = async () => {
    if (newDependentName.trim() !== "") {
      await onAdd(newDependentName);
      setNewDependentName("");
    }
  };

  return (
    <Table.Row>
      <Table.Cell>
        <Input
          type="text"
          value={newDependentName}
          onChange={(e) => setNewDependentName(e.target.value)}
          placeholder="New dependent name"
          readOnly={isLoading}
        />
      </Table.Cell>
      <Table.Cell align="right">
        <Button onClick={handleAdd} disabled={isLoading}>
          Add
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

AddDependentRow.displayName = "AddDependentRow";
