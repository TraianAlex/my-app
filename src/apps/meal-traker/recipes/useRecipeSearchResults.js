import { useState, useEffect } from 'react';
import fetcher from 'common/utils/fetcher';

export const useRecipeSearchResults = (searchString) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const loadSearchResults = async () => {
      const results = await fetcher(
        `${process.env.REACT_APP_API}/meal-tracker/recipes?search=${searchString}`,
      );
      setSearchResults(results);
      setIsLoading(false);
    };

    if (searchString) {
      loadSearchResults();
    }
  }, [searchString]);

  return { isLoading, searchResults };
};
