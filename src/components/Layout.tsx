import styled from "styled-components";

type InlineProps = Readonly<{
  gap?: number;
  $justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
  $alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}>;

export const Inline = styled.div<InlineProps>`
  display: flex;
  justify-content: ${({ $justifyContent }) =>
    $justifyContent || "space-between"};
  align-items: ${({ $alignItems }) => $alignItems || "baseline"};
  width: 100%;
  ${({ gap = 0 }) => `gap: ${gap}px`};
`;

Inline.displayName = "Inline";

type StackProps = Readonly<{
  gap?: number;
}>;

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  ${({ gap = 0 }) => `gap: ${gap}px`};
`;

Stack.displayName = "Stack";
