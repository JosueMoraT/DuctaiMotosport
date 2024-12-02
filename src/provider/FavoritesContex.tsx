import { createContext } from 'react';

const FavoritesContext = createContext({
  favoritesList: [],
  setFavoritesList: () => {},
} as any);

export { FavoritesContext };