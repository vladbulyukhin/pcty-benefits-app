import { NavLink, useParams } from "react-router-dom";
import { Inline, Stack } from "../../components/Layout";
import { Page } from "../../components/Page";
import { BenefitsCard } from "./components/BenefitsCard";
import { DependentCard } from "./containers/DependentCard";
import { EmployeeCard } from "./containers/EmployeeCard";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import { EmployeeDependentProvider } from "./contexts/EmployeeDependentContext";
import styled from "styled-components";

const Column = styled.div`
  flex: 1 1 0;
`;

Column.displayName = "Column";

type EmployeeDetailPageParams = Readonly<{
  id: string;
}>;

export const EmployeeDetailPage: React.FC = () => {
  const { id } = useParams<EmployeeDetailPageParams>();
  const isExistingEmployee = id && id !== "new";

  return (
    <EmployeeProvider employeeId={id ?? null}>
      <EmployeeDependentProvider employeeId={id ?? null}>
        <Page>
          <Page.Header>
            <NavLink to="/">Employees & Benefits</NavLink>&nbsp;&gt;&nbsp;
            {isExistingEmployee ? "Employee Details" : "New Employee"}
          </Page.Header>
          <Page.Content>
            <Stack gap={16}>
              <Inline
                gap={16}
                $justifyContent="space-between"
                $alignItems="stretch"
              >
                <Column>
                  <EmployeeCard />
                </Column>

                {isExistingEmployee && (
                  <Column>
                    <BenefitsCard />
                  </Column>
                )}
              </Inline>

              {isExistingEmployee && <DependentCard />}
            </Stack>
          </Page.Content>
        </Page>
      </EmployeeDependentProvider>
    </EmployeeProvider>
  );
};

EmployeeDetailPage.displayName = "EmployeeDetailPage";
