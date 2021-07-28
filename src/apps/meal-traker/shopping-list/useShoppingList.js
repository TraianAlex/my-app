import { useState, useEffect } from 'react';
import fetcher from 'common/utils/fetcher';

export const useShoppingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadShoppingList = async () => {
      const items = await fetcher(
        `${process.env.REACT_APP_API}/meal-tracker/shopping-list`,
      );
      setIsLoading(false);
      setItems(items);
    };

    loadShoppingList();
  }, []);

  return { isLoading, items };
};
