import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
`;

LoadingWrapper.displayName = "LoadingWrapper";

export const Loading: React.FC = () => (
  <LoadingWrapper>Loading...</LoadingWrapper>
);

Loading.displayName = "Loading";
