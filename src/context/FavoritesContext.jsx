import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const FavoritesContext = createContext();



export function FavoritesProvider({ children }) {


  const [favorites, setFavorites] = useState(() => {

    try {

      const saved =
        localStorage.getItem(
          "activzone_favorites"
        );


      return saved
        ? JSON.parse(saved)
        : [];


    } catch {

      return [];

    }

  });





  useEffect(() => {

    localStorage.setItem(

      "activzone_favorites",

      JSON.stringify(favorites)

    );

  }, [favorites]);







  function toggleFavorite(product){


    setFavorites(prev => {


      const exists = prev.some(

        item =>
        item.id === product.id

      );



      if(exists){


        return prev.filter(

          item =>
          item.id !== product.id

        );


      }



      return [

        ...prev,

        product

      ];


    });


  }







  function isFavorite(id){


    return favorites.some(

      item =>
      item.id === id

    );


  }








  function clearFavorites(){


    setFavorites([]);


  }







  return (

    <FavoritesContext.Provider

      value={{

        favorites,

        toggleFavorite,

        isFavorite,

        clearFavorites

      }}

    >

      {children}

    </FavoritesContext.Provider>

  );


}







export function useFavorites(){


  return useContext(
    FavoritesContext
  );


}