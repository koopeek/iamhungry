import React from "react";
import styles from "./SelectField.module.scss";

type Props = {
  options: string[];
  handleChange: (value: string) => void;
};

const SelectField: React.FC<Props> = ({ options, handleChange }) => {
  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      className={styles.selectField}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export { SelectField };
