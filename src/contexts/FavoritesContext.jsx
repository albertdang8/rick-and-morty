import { useState, createContext, useEffect } from "react";

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //check for localStorage and store it
    const storedFavs = localStorage.getItem("favoritesList");

    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);


  const addCharacter = (charToAdd) => {
    console.log('adding: ', charToAdd);
    let newFavorites = [...favorites, charToAdd]
    setFavorites(newFavorites);
    localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
  }

  const removeCharacter = (charId) => {
    console.log('removing ', charId)
    let newFavorites = favorites.filter(item => item.id !== charId)
    setFavorites(newFavorites)
    localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addCharacter, removeCharacter }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}
