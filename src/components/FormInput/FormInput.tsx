import React, { Fragment } from "react";
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
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Fragment>
  );
};

export { FormInput };
