import React, { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import "./SearchForm.scss";

const SearchForm: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <form className="searchForm">
      <div className="searchForm__nameInput">
        <FormInput
          name="name"
          type="text"
          label="Meal name"
          placeholder="Enter meal name..."
          value={name}
          onChange={setName}
        />
      </div>
    </form>
  );
};

export { SearchForm };
