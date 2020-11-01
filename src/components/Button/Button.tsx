import React from "react";
import "./Button.scss";

type Props = {
  type: "button" | "submit";
  textContent: string;
  disabled: boolean;
  handleClick?: () => void;
};

export const Button: React.FC<Props> = ({
  type,
  textContent,
  disabled,
  handleClick,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="button"
    >
      {textContent}
    </button>
  );
};

Button.displayName = "Button";
