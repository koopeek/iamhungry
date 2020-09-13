import React, { useState, useContext } from "react";
import { FormInput } from "../FormInput/FormInput";
import "./SearchForm.scss";
import { AppContext } from "../../context/context"

const SearchForm: React.FC = () => {
  const [name, setName] = useState<string>("");

  const {fetchRecipes} = useContext(AppContext);

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
      <div>
        <input type="submit" onSubmit={() => fetchRecipes}></input>
      </div>
    </form>
  );
};

export { SearchForm };
