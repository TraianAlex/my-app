import { useState, useEffect } from 'react';

export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  const loadIngredients = async () => {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_API}/meal-tracker/ingredients`,
    );
    const ingredients = await response.json();
    setIngredients(ingredients);
    setIsLoading(false);
  };

  useEffect(() => {
    loadIngredients();
  }, []);

  return { isLoading, ingredients, setIngredients };
};
