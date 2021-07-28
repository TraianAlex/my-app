import { useState, useEffect } from 'react';
import fetcher from 'common/utils/fetcher';

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rawMeals, setRawMeals] = useState([]);

  const loadMeals = async () => {
    setIsLoading(true);
    const mealsResponse = await fetcher(
      `${process.env.REACT_APP_API}/meal-tracker/meals`,
    );
    setRawMeals(mealsResponse);
    setIsLoading(false);
  };

  useEffect(() => {
    loadMeals();
  }, []);

  return {
    isLoading,
    meals: rawMeals.map((meal) => ({
      ...meal,
      plannedDate: new Date(meal.plannedDate),
    })),
    setMeals: setRawMeals,
  };
};
