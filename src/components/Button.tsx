import { Link, type LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";

type BaseButtonProps = Readonly<{
  variant?: "primary" | "secondary" | "destructive";
}>;

const buttonStyles = css<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  line-height: 20px;
  font-weight: 500;
  height: 36px;
  padding: 8px 16px;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  ${({ variant = "primary" }) => {
    switch (variant) {
      case "primary":
        return css`
          color: #fafafa;
          background-color: #18181b;
        `;
      case "secondary":
        return css`
          color: #18181b;
          background-color: #f4f4f5;
        `;
      case "destructive":
        return css`
          color: #fafafa;
          background-color: #dc2626;
        `;
      default:
        throw new Error(`Unknown button variant: ${variant}`);
    }
  }}
`;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;

export const Button = styled.button<ButtonProps>`
  ${buttonStyles}
`;

Button.displayName = "Button";

export type LinkButtonProps = LinkProps & BaseButtonProps;

export const LinkButton = styled(Link)<LinkButtonProps>`
  ${buttonStyles};
`;

LinkButton.displayName = "LinkButton";
