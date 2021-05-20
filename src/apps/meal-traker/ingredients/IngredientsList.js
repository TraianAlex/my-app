import React from 'react';
import { Link } from 'react-router-dom';
import { IngredientsListItem } from './IngredientsListItem';

export const IngredientsList = ({ ingredients, isLoading, onDelete }) => {
  return (
    <div className="list-container p-3">
      <h1>Ingredients</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        ingredients.map((ingredient) => (
          <IngredientsListItem
            key={ingredient.name}
            ingredient={ingredient}
            onDelete={onDelete}
          />
        ))
      )}
      <Link to="/meal-tracker/add-ingredient">
        <button className="mt-3">+ Add Ingredient</button>
      </Link>
    </div>
  );
};
