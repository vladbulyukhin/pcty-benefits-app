import styled from "styled-components";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = styled.label<LabelProps>`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #18181b;
`;

Label.displayName = "Label";
