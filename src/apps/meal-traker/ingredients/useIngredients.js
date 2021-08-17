import { useState, useEffect, useCallback } from 'react';
import fetcher from 'common/utils/fetcher';

export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  const loadIngredients = useCallback(async () => {
    setIsLoading(true);
    const ingredients = await fetcher(
      `${process.env.REACT_APP_API}/meal-tracker/ingredients`,
    );
    setIngredients(ingredients);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadIngredients();
  }, [loadIngredients]);

  return { isLoading, ingredients, setIngredients };
};
