import React from 'react';
import { Link } from 'react-router-dom';
import { SmallX } from '../ui';

export const MealsListItem = ({ meal, date, onDelete }) => (
  <div className="d-flex p-3 list-item">
    {meal ? (
      <>
        <h3>{date.getDate()}</h3>
        <p>{meal.recipe.name}</p>
        <div className="d-flex align-items-center justify-content-center">
          <SmallX onClick={() => onDelete(meal._id)} />
        </div>
      </>
    ) : (
      <>
        <h3>{date.getDate()}</h3>
        <p>No meal planned</p>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/meal-tracker/recipes?date=${date.toString()}`}>
            <button>Add</button>
          </Link>
        </div>
      </>
    )}
  </div>
);

// l 10 - meal.recipeId.name
