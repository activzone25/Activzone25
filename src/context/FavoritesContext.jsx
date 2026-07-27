import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {

    const saved = localStorage.getItem("activzone_favorites");

    return saved ? JSON.parse(saved) : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "activzone_favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);

  const toggleFavorite = (product) => {

    const exists = favorites.find(
      item => item.id === product.id
    );

    if (exists) {

      setFavorites(prev =>
        prev.filter(item => item.id !== product.id)
      );

    } else {

      setFavorites(prev => [...prev, product]);

    }

  };

  const isFavorite = (id) => {

    return favorites.some(item => item.id === id);

  };

  return (

    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite
      }}
    >

      {children}

    </FavoritesContext.Provider>

  );

}

export function useFavorites(){

  return useContext(FavoritesContext);

}