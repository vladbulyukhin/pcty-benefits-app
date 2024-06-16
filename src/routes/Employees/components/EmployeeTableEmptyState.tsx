import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

EmptyWrapper.displayName = "EmptyWrapper";

export const EmployeeTableEmptyState: React.FC = () => (
  <EmptyWrapper>
    Nothing to see here yet. <Link to="/employee/new">Add a new employee</Link>{" "}
    to continue.
  </EmptyWrapper>
);

EmployeeTableEmptyState.displayName = "EmployeeTableEmptyState";
