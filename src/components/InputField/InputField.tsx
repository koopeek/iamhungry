import React from "react";
import styles from "./InputField.module.scss";

type Props = {
  placeholder?: string;
  handleChange: (value: string) => void;
};

const InputField: React.FC<Props> = ({ placeholder, handleChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.inputField}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export { InputField };
