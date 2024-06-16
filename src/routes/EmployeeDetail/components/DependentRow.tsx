import React, { useState } from "react";
import { Table } from "../../../components/Table";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Inline } from "../../../components/Layout";
import type { Dependent } from "../../../models/Dependent";

type DependentRowProps = Readonly<{
  dependent: Dependent;
  onUpdate: (dependent: Dependent) => void;
  onDelete: (id: string) => void;
  isLoading: boolean;
}>;

export const DependentRow: React.FC<DependentRowProps> = ({
  dependent,
  onUpdate,
  onDelete,
  isLoading,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingName, setEditingName] = useState(dependent.name);

  const handleUpdate = async () => {
    await onUpdate({ ...dependent, name: editingName });
    setIsEditing(false);
  };

  return (
    <Table.Row>
      <Table.Cell>
        {isEditing ? (
          <Input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
            readOnly={isLoading}
          />
        ) : (
          dependent.name
        )}
      </Table.Cell>
      <Table.Cell align="right">
        {isEditing ? (
          <Button onClick={handleUpdate} disabled={isLoading}>
            Save
          </Button>
        ) : (
          <Inline gap={2} $justifyContent="flex-end">
            <Button
              variant="secondary"
              onClick={() => setIsEditing(true)}
              disabled={isLoading}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => onDelete(dependent.id)}
              disabled={isLoading}
            >
              Delete
            </Button>
          </Inline>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

DependentRow.displayName = "DependentRow";
