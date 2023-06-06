import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import "./CharacterCard.css";

function CharacterCard({ character }) {
  const { favorites, addCharacter, removeCharacter } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites?.find((item) => item.id === character.id));
  }, [favorites]);

  return (
    <div className="character-card">
      <img src={character?.image} alt={character?.name} />
      <p>{character?.name}</p>
      <Link to={`/details/${character?.id}`}>See Details</Link>
      {isFavorite ? (
        <FaHeart
          className="heart-icon"
          onClick={() => removeCharacter(character.id)}
        />
      ) : (
        <FaRegHeart
          className="heart-icon"
          onClick={() => addCharacter(character)}
        />
      )}
    </div>
  );
}

export default CharacterCard;