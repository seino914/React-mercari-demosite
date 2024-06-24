import { useState } from 'react';

export const useFavorite = (favorites: string[]) => {
  const [favoriteCodes, setFavoriteCodes] = useState<string[]>(favorites);

  const changeFavorite = (productCode: string) => {
    setFavoriteCodes((prev) => {
      return prev.includes(productCode)
        ? prev.filter((code) => code !== productCode)
        : [...prev, productCode];
    });
  };
  return {
    favoriteCodes,
    changeFavorite,
  };
};
