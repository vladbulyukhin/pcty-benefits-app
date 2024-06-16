import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { Inline, Stack } from "../../../components/Layout";
import { Caption, Danger } from "../../../components/Text";
import { useEmployeeDependents } from "../contexts/EmployeeDependentContext";
import { DependentTable } from "../components/DependentTable";

export const DependentCard: React.FC = () => {
  const {
    dependents,
    createDependent,
    updateDependent,
    deleteDependent,
    isLoading,
    hasFailed,
  } = useEmployeeDependents();

  const [showAddDependent, setShowAddDependent] = useState(false);

  const handleAddDependent = async (name: string) => {
    await createDependent(name);
    setShowAddDependent(false);
  };

  return (
    <Card>
      <Card.Header>
        <Inline $justifyContent="space-between">
          <Stack>
            <Card.Title>Dependents</Card.Title>
            <Card.Description>
              Employee dependents usually include a spouse or children.
              <br />
              Adding dependents will incur <strong>an additional cost</strong>.
            </Card.Description>
          </Stack>
          <Button
            onClick={() => setShowAddDependent(true)}
            disabled={isLoading}
          >
            Add dependant
          </Button>
        </Inline>
      </Card.Header>
      <Card.Body>
        {hasFailed && <Danger>Something went wrong. Please try again.</Danger>}

        {dependents.length > 0 || showAddDependent ? (
          <DependentTable
            dependents={dependents}
            isLoading={isLoading}
            onAdd={handleAddDependent}
            onUpdate={updateDependent}
            onDelete={deleteDependent}
            showAddDependent={showAddDependent}
          />
        ) : (
          !isLoading &&
          !hasFailed && <div>This employee has no dependents.</div>
        )}
      </Card.Body>
      <Card.Footer>
        <Caption>
          Showing <strong>{dependents.length}</strong> dependents
        </Caption>
      </Card.Footer>
    </Card>
  );
};

DependentCard.displayName = "DependentCard";
