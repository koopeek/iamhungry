import React from "react";

type Props = {
  ingredient: string;
};

export const SearchFormIngredientsListItem: React.FC<Props> = ({
  ingredient,
}) => {
  return <li>{ingredient}</li>;
};

SearchFormIngredientsListItem.displayName = "SearchFormIngredientsListItem";
