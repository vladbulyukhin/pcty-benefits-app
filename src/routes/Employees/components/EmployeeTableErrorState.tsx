import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #dc2626;
  font-size: 16px;
  font-weight: 500;
`;

ErrorWrapper.displayName = "ErrorWrapper";

export const EmployeeTableErrorState: React.FC = () => (
  <ErrorWrapper role="alert">
    <p>Something went wrong while loading employees.</p>
    <p>Please try reloading the page.</p>
  </ErrorWrapper>
);

EmployeeTableErrorState.displayName = "EmployeeTableErrorState";
