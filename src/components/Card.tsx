import styled from "styled-components";

const CardComponent = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

CardComponent.displayName = "Card";

const CardHeader = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

CardHeader.displayName = "CardHeader";

const CardTitle = styled.h1`
  color: #09090b;
  font-size: 16px;
  line-height: 16px;
  margin: 0;
  font-weight: 500;
`;

CardTitle.displayName = "CardTitle";

const CardDescription = styled.p`
  color: #71717a;
  margin: 0;
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
`;

CardDescription.displayName = "CardDescription";

const CardBody = styled.div`
  padding: 24px;
  padding-top: 0;
`;

CardBody.displayName = "CardBody";

const CardFooter = styled.div`
  padding: 24px;
  padding-top: 0;
`;

CardFooter.displayName = "CardFooter";

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
});
