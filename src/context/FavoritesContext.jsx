import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";


const FavoritesContext = createContext(undefined);

const FAVORITES_STORAGE_KEY = "activzone_favorites";


function getSavedFavorites() {
    try {
        const savedFavorites = localStorage.getItem(
            FAVORITES_STORAGE_KEY
        );

        const parsedFavorites = savedFavorites
            ? JSON.parse(savedFavorites)
            : [];

        return Array.isArray(parsedFavorites)
            ? parsedFavorites
            : [];
    } catch {
        return [];
    }
}


export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(
        getSavedFavorites
    );


    useEffect(() => {
        localStorage.setItem(
            FAVORITES_STORAGE_KEY,
            JSON.stringify(favorites)
        );
    }, [favorites]);


    function toggleFavorite(product) {
        setFavorites((currentFavorites) => {
            const alreadyExists = currentFavorites.some(
                (item) => item.id === product.id
            );

            if (alreadyExists) {
                return currentFavorites.filter(
                    (item) => item.id !== product.id
                );
            }

            return [...currentFavorites, product];
        });
    }


    function isFavorite(productId) {
        return favorites.some(
            (item) => item.id === productId
        );
    }


    function clearFavorites() {
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


export function useFavorites() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error(
            "useFavorites debe utilizarse dentro de FavoritesProvider."
        );
    }

    return context;
}