import { useState, useEffect } from 'react';

export const useRecipeSearchResults = (searchString) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const loadSearchResults = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_MEAL_TRACKER}/recipes?search=${searchString}`,
      );
      const results = await response.json();
      setSearchResults(results);
      setIsLoading(false);
    };

    if (searchString) {
      loadSearchResults();
    }
  }, [searchString]);

  return { isLoading, searchResults };
};
