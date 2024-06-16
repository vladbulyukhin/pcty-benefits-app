import { Outlet } from "react-router-dom";
import { LogoStub } from "../components/Logo";
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

AppContainer.displayName = "AppContainer";

export const SidebarStub = styled.aside`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  border-right: 1px solid #e5e7eb;
  width: 56px;
  padding: 16px 8px;
`;

SidebarStub.displayName = "SidebarStub";

const MainContent = styled.div`
  padding-left: 56px;
  width: 100%;
  background-color: #fbfbfb;
`;

MainContent.displayName = "MainContent";

export const Root: React.FC = () => (
  <AppContainer>
    <SidebarStub>
      <LogoStub />
    </SidebarStub>
    <MainContent>
      <Outlet />
    </MainContent>
  </AppContainer>
);

Root.displayName = "Root";
