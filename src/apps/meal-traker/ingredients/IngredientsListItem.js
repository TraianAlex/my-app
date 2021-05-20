import React from 'react';
import { SmallX } from '../ui';

export const IngredientsListItem = ({ ingredient, onDelete }) => {
  return (
    <div className="d-flex p-3 list-item">
      <h3>{ingredient.name}</h3>
      <p>
        {ingredient.amount} {ingredient.units}
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <SmallX onClick={() => onDelete(ingredient.name)} />
      </div>
    </div>
  );
};
