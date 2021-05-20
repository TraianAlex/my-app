import React from 'react';
import { Link } from 'react-router-dom';
import '../meal-tracker.scss';
import { MealsList, useMeals } from '../meals';
import { IngredientsList, useIngredients } from '../ingredients';

export const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = useIngredients();

  const onDeleteMeal = async (id) => {
    const response = await fetch(`http://127.0.0.1:8080/meals/${id}`, { method: 'delete' });
    const updatedMeals = await response.json();
    setMeals(updatedMeals);
  };

  const onDeleteIngredient = async (name) => {
    const response = await fetch(`http://127.0.0.1:8080/ingredients/${name}`, { method: 'delete' });
    const updatedIngredients = await response.json();
    setIngredients(updatedIngredients);
  };

  return (
    <div className="d-flex flex-column meal-tracker">
      <div className="d-flex">
        <div className="column">
          <MealsList
            isLoading={isLoadingMeals}
            meals={meals}
            onDelete={onDeleteMeal}
          />
        </div>
        <div className="column">
          <IngredientsList
            isLoading={isLoadingIngredients}
            ingredients={ingredients}
            onDelete={onDeleteIngredient}
          />
          <Link to="/meal-tracker/shopping-list">
            <button className="shopping-list-button list-container p-3 d-block w-100">
              Generate Shopping List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
