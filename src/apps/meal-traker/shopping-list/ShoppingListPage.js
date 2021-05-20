import React from 'react';
import { BackButton } from '../ui';
import { useShoppingList } from './useShoppingList';

export const ShoppingListPage = () => {
  const { isLoading, items } = useShoppingList();

  return (
    <div className="meal-tracker">
      <BackButton />
      <div className="centered-container">
        <h1>Here's Your Shopping List:</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => <p key={item}>{item}</p>)
        )}
      </div>
    </div>
  );
};
