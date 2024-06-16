import { Dependent } from "../../../models/Dependent";
import { Employee } from "../../../models/Employee";
import {
  BenefitsDiscount,
  FullDependentBenefitsCost,
  FullEmployeeBenefitsCost,
  PaychecksPerYear,
} from "../constants/benefits";

const discountMultiplier = 1 - BenefitsDiscount;

function fullfillsDiscountRequirements(person: Employee | Dependent): boolean {
  return person.name?.startsWith("A");
}

export function calculateBenefitsCost(
  employee: Employee,
  dependents: ReadonlyArray<Dependent>
): number {
  if (!employee) {
    return 0;
  }

  const employeeCost = fullfillsDiscountRequirements(employee)
    ? FullEmployeeBenefitsCost * discountMultiplier
    : FullEmployeeBenefitsCost;

  const dependentCost = dependents.reduce((total, dependent) => {
    return (
      total +
      (fullfillsDiscountRequirements(dependent)
        ? FullDependentBenefitsCost * discountMultiplier
        : FullDependentBenefitsCost)
    );
  }, 0);

  return (employeeCost + dependentCost) / PaychecksPerYear;
}
