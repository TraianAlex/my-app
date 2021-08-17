import { useState, useEffect, useCallback } from 'react';
import fetcher from 'common/utils/fetcher';

export const useShoppingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const loadShoppingList = useCallback(async () => {
    const items = await fetcher(
      `${process.env.REACT_APP_API}/meal-tracker/shopping-list`,
    );
    setIsLoading(false);
    setItems(items);
  }, []);

  useEffect(() => {
    loadShoppingList();
  }, [loadShoppingList]);

  return { isLoading, items };
};
