import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Input";
import { Label } from "../../../components/Label";
import { Button } from "../../../components/Button";
import { useEmployee } from "../contexts/EmployeeContext";
import { Inline, Stack } from "../../../components/Layout";
import { emptyEmployee } from "../../../models/Employee";
import { Danger } from "../../../components/Text";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const EmployeeCard: React.FC = () => {
  const navigate = useNavigate();
  const {
    employee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    isLoading,
    hasFailed,
  } = useEmployee();

  const [name, setName] = useState(employee?.name || "");
  const [position, setPosition] = useState(employee?.position || "");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setPosition(employee.position);
    }
  }, [employee]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (employee?.id) {
      await updateEmployee({ ...employee, name, position });
    } else {
      const createdEmployee = await createEmployee({
        ...emptyEmployee,
        name,
        position,
      });
      if (createdEmployee) {
        navigate(`/employee/${createdEmployee.id}`);
      }
    }
  };

  const handleDelete = async () => {
    if (employee?.id) {
      await deleteEmployee();
      navigate("/");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Header>
          <Card.Title>
            {employee?.id ? "Edit Employee" : "Add Employee"}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Stack gap={8}>
            <FormGroup>
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={isLoading}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                readOnly={isLoading}
              />
            </FormGroup>
          </Stack>
        </Card.Body>
        <Card.Footer>
          <Inline $justifyContent={hasFailed ? "space-between" : "flex-end"}>
            {hasFailed && <Danger>Error saving data. Please try again.</Danger>}

            <Inline gap={8} $justifyContent="flex-end">
              {employee?.id && (
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  Delete
                </Button>
              )}

              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </Inline>
          </Inline>
        </Card.Footer>
      </Card>
    </Form>
  );
};

EmployeeCard.displayName = "EmployeeCard";
