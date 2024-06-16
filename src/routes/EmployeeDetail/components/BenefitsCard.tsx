import { Card } from "../../../components/Card";
import { Stack } from "../../../components/Layout";
import {
  BenefitsDiscount,
  FullDependentBenefitsCost,
  FullEmployeeBenefitsCost,
  PaychecksPerYear,
} from "../constants/benefits";
import { useEmployee } from "../contexts/EmployeeContext";
import { useEmployeeDependents } from "../contexts/EmployeeDependentContext";
import { calculateBenefitsCost } from "../utils/benefitsUtils";

export const BenefitsCard: React.FC = () => {
  const { employee } = useEmployee();
  const { dependents } = useEmployeeDependents();

  if (!employee) {
    return null;
  }

  const costPerPaycheck = calculateBenefitsCost(employee, dependents);
  const costPerYear = costPerPaycheck * PaychecksPerYear;

  return (
    <Card>
      <Card.Header>
        <Card.Title>Benefits</Card.Title>
        <Card.Description>
          The cost of benefits is{" "}
          <strong>${FullEmployeeBenefitsCost}/year</strong> for each employee{" "}
          <strong>${FullDependentBenefitsCost}/year</strong> and for each
          dependant.
          <br />
          Anyone whose name starts with an <strong>'A'</strong> is eligble for
          a&nbsp;{BenefitsDiscount * 100}% discount.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap={8}>
          <div>
            Total cost per paycheck:{" "}
            <strong>${costPerPaycheck.toFixed(2)}</strong>
          </div>
          <div>
            Total cost per year: <strong>${costPerYear.toFixed(2)}</strong>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

BenefitsCard.displayName = "BenefitsCard";
