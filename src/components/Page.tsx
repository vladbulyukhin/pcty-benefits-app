import styled from "styled-components";

export const PageComponent = styled.div`
  width: 100%;
  background-color: #fbfbfb;
`;

PageComponent.displayName = "Page";

export const PageHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  padding-bottom: 10px;
  background-color: #fbfbfb;
  height: 66px;
`;

PageHeader.displayName = "PageHeader";

export const PageContent = styled.main`
  padding: 20px;
  padding-top: 10px;
`;

PageContent.displayName = "PageContent";

export const Page = Object.assign(PageComponent, {
  Header: PageHeader,
  Content: PageContent,
});
