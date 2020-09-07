import React from "react";
import "./Input.scss";

type Props = {
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
};

const Input: React.FC<Props> = ({ value, handleChange, placeholder }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export { Input };
