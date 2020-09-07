import React, { useState } from "react";
import { Input } from "./Input/Input";
import "./SearchForm.scss";

const SearchForm: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <form className="searchForm">
      <div className="searchForm__nameInput">
        <Input
          placeholder="Enter meal name..."
          value={name}
          handleChange={setName}
        />
      </div>
    </form>
  );
};

export { SearchForm };
