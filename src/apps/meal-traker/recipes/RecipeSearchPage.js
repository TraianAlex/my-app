import React, { useState } from 'react';
import { BackButton } from '../ui';
import { useIngredients } from '../ingredients';
import { RecipeSearchResultsList } from './RecipeSearchResultsList';
import { useRecipeSearchResults } from './useRecipeSearchResults';

export const RecipeSearchPage = () => {
  const [searchString, setSearchString] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const { ingredients } = useIngredients();
  const { searchResults } = useRecipeSearchResults(searchString);

  const onSearchClicked = () => setSearchString(searchInputValue);

  const handleChange = (e) => setSearchInputValue(e.target.value);

  return (
    <div className="meal-tracker">
      <BackButton />
      <div className="centered-container">
        <h1>Add Meal to Plan</h1>
        <input
          type="text"
          className="d-block w-100 mt-3 mb-3"
          placeholder="Enter keyword here"
          value={searchInputValue}
          onChange={handleChange}
        />
        <button className="d-block w-100 mb-3" onClick={onSearchClicked}>
          Search
        </button>
        <RecipeSearchResultsList
          recipes={searchResults}
          ingredients={ingredients}
        />
      </div>
    </div>
  );
};
