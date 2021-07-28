import React from 'react';
import { Link } from 'react-router-dom';
import fetcher from 'common/utils/fetcher';
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
    const updatedMeals = await fetcher(
      `${process.env.REACT_APP_API}/meal-tracker/meals/${id}`,
      { method: 'delete' },
    );
    setMeals(updatedMeals);
  };

  const onDeleteIngredient = async (name) => {
    const updatedIngredients = await fetcher(
      `${process.env.REACT_APP_API}/meal-tracker/ingredients/${name}`,
      { method: 'delete' },
    );
    setIngredients(updatedIngredients);
  };

  return (
    <div className="d-flex flex-column meal-tracker">
      <div className="d-flex flex-wrap justify-content-around">
        <div className="column" style={{ flexBasis: '400px' }}>
          <MealsList
            isLoading={isLoadingMeals}
            meals={meals}
            onDelete={onDeleteMeal}
          />
        </div>
        <div className="column" style={{ flexBasis: '340px' }}>
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
