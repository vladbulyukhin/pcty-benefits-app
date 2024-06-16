import styled from "styled-components";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = styled.input<InputProps>`
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e4e4e7;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

Input.displayName = "Input";
