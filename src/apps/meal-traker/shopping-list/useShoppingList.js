import { useState, useEffect } from 'react';

export const useShoppingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadShoppingList = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_MEAL_TRACKER}/shopping-list`,
      );
      const items = await response.json();
      setIsLoading(false);
      setItems(items);
    };

    loadShoppingList();
  }, []);

  return { isLoading, items };
};
