import React from "react";
import "./FormInput.scss";

type Props = {
  name: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const FormInput: React.FC<Props> = ({
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="form-input">
      <label htmlFor={name} className="form-input__label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="form-input__field"
      />
    </div>
  );
};

export { FormInput };
